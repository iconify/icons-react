import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u5g-q6bcn {
  fill: currentColor;
  d: path("M6 3h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm-1 7h12a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8m1 3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="u5g-q6bcn"/>`,
		"fallback": "coolicons:server-fill-round",
	});
}

export default Component;

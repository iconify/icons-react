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
		"content": `<style>.m6oh2umiq {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}
</style><path class="m6oh2umiq"/>`,
		"fallback": "coolicons:text-align-left-fill-round",
	});
}

export default Component;

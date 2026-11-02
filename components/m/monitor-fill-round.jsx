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
		"content": `<style>.iu4mob-9u {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Zm12 11a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="iu4mob-9u"/>`,
		"fallback": "coolicons:monitor-fill-round",
	});
}

export default Component;

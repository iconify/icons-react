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
		"content": `<style>.r4imp54_x {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm12 10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="r4imp54_x"/>`,
		"fallback": "coolicons:row-minus-fill",
	});
}

export default Component;

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
		"content": `<style>.g5wnm1b8d {
  fill: currentColor;
  d: path("M2 4v16h20V4zm18 14H4V6h16z");
}
</style><path class="g5wnm1b8d"/>`,
		"fallback": "ic:outline-rectangle",
	});
}

export default Component;

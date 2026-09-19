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
		"content": `<style>.sgs7_xe4x {
  fill: currentColor;
  d: path("M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z");
}
</style><path class="sgs7_xe4x"/>`,
		"fallback": "ic:outline-arrow-back",
	});
}

export default Component;

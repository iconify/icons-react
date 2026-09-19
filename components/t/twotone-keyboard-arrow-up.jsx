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
		"content": `<style>.ibz29_uar {
  fill: currentColor;
  d: path("M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z");
}
</style><path class="ibz29_uar"/>`,
		"fallback": "ic:twotone-keyboard-arrow-up",
	});
}

export default Component;

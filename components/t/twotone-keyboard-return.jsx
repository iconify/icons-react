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
		"content": `<style>.zl5l7lbku {
  fill: currentColor;
  d: path("M19 7v4H5.83l3.58-3.59L8 6l-6 6l6 6l1.41-1.41L5.83 13H21V7z");
}
</style><path class="zl5l7lbku"/>`,
		"fallback": "ic:twotone-keyboard-return",
	});
}

export default Component;

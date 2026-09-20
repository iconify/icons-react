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
		"content": `<style>.aptcmjbvy {
  fill: currentColor;
  d: path("m12 7.114l-5.265 5.24q-.14.14-.332.134q-.191-.007-.337-.154q-.141-.14-.141-.344t.14-.344l5.37-5.369q.242-.243.565-.243t.566.243l5.388 5.388q.14.14.133.342t-.153.347q-.14.14-.334.14t-.334-.14z");
}
</style><path class="aptcmjbvy"/>`,
		"fallback": "material-symbols-light:keyboard-control-key-outline-rounded",
	});
}

export default Component;

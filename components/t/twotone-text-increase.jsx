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
		"content": `<style>.w725p37qx {
  fill: currentColor;
  d: path("M1.99 19h2.42l1.27-3.58h5.65L12.59 19h2.42L9.75 5h-2.5zm4.42-5.61L8.44 7.6h.12l2.03 5.79zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2z");
}
</style><path class="w725p37qx"/>`,
		"fallback": "ic:twotone-text-increase",
	});
}

export default Component;

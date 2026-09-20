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
		"content": `<style>.kl3oe-23x {
  fill: currentColor;
  d: path("M4.192 18.539V5.384l12.281 5.25h-.07q-.451.039-.909.133t-.798.252L5.192 7v3.885L10.04 12l-4.847 1.116V17l6.035-2.57q-.123.287-.204.629q-.08.341-.1.576v.011zm9.78.912q-1.164-1.164-1.164-2.835t1.164-2.836t2.836-1.164q1.67 0 2.835 1.164t1.165 2.836q0 1.67-1.165 2.835t-2.835 1.165t-2.836-1.165m4.486-.64l.546-.545l-1.812-1.812V13.73h-.769v3.046zm-13.266-4.38V7v10z");
}
</style><path class="kl3oe-23x"/>`,
		"fallback": "material-symbols-light:schedule-send-outline",
	});
}

export default Component;

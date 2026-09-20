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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.nckgicb_c {
  fill: var(--svg-color--24aae1, #24aae1);
  d: path("M19.313 3H12l-7.312 9H12z");
}

.pyb-dybxv {
  fill: var(--svg-color--000, #000);
  d: path("M19.313 12H12l-7.312 9H12z");
}
</style><g class="ft5dv1b6b"><path class="nckgicb_c"/><path class="pyb-dybxv"/></g>`,
		"fallback": "token-branded:stpt",
	});
}

export default Component;

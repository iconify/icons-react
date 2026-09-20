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

.i_a6_hxmb {
  stop-color: var(--svg-color--00f2ff, #00f2ff);
}

.ord_mkblz {
  fill-rule: evenodd;
  d: path("M12 21a7.58 7.58 0 0 0 7.579-7.579C19.579 9.234 12.947 3 11.999 3c-.947 0-7.578 6.234-7.578 10.421A7.58 7.58 0 0 0 12 21m-3.79-9v3.316h2.369v2.368h2.842v-2.368h2.368V12z");
}

.wxajg_2ob {
  stop-color: var(--svg-color--00bcf3, #00bcf3);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGYqoV0TsO)" clip-rule="evenodd" class="ord_mkblz"/><defs><linearGradient id="SVGYqoV0TsO" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="i_a6_hxmb"/><stop offset="1" class="wxajg_2ob"/></linearGradient></defs></g>`,
		"fallback": "token-branded:tdrop",
	});
}

export default Component;

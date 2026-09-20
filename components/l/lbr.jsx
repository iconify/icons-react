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
		"content": `<style>.c499ssbjg {
  stop-color: var(--svg-color--fb9c96, #fb9c96);
}

.djl95bqtm {
  d: path("M3.6 18h6.402l-4.284-4.83L12 5.388l6.378 7.782L13.95 18h6.45v-1.8h-2.574l2.574-3.03L12 3L3.6 13.17l2.664 3.03H3.6zm16.8 1.2H3.6V21h16.8z");
}

.ft5dv1b6b {
  fill: none;
}

.meaoonbxx {
  stop-color: var(--svg-color--5c9ded, #5c9ded);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGjiixhdZF)" class="djl95bqtm"/><defs><linearGradient id="SVGjiixhdZF" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="c499ssbjg"/><stop offset="1" class="meaoonbxx"/></linearGradient></defs></g>`,
		"fallback": "token-branded:lbr",
	});
}

export default Component;

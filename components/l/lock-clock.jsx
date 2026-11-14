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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixau_rbxc {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.kl35hpj2a {
  d: path("M12 14.25v1.25l1 .75");
}

.u34nf7zvd {
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-2.25A4.375 4.375 0 0 1 8.875 10M8 10V7a4 4 0 0 1 8 0v3");
}
</style><g class="hntgybcog"><path class="u34nf7zvd"/><path class="ixau_rbxc"/><path class="kl35hpj2a"/></g>`,
		"fallback": "uix:lock-clock",
	});
}

export default Component;

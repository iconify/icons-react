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
		"content": `<style>.kb6_hbjfr {
  d: path("M11.1 16.5H2.5v-14h19v11.2");
}

.mq_i3sbyh {
  d: path("M6 6h4.5v7H6Zm11 7h-3.5V6H18v6.9m-3.75 4.35a5.3 5.3 0 0 1 7.5 0M16 19a2.83 2.83 0 0 1 4 0m-2 2h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kb6_hbjfr"/><path class="mq_i3sbyh"/></g>`,
		"fallback": "uix-sharp:smart-switch-double",
	});
}

export default Component;

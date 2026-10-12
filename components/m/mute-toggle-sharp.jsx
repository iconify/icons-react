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
		"content": `<style>.fpf2snbwg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.25V9h3l3.5-3l1.23-1.101l.02 1.651v10.9l-.02 1.651L9.25 18l-3.5-3h-3v-1.25ZM13 9h8.25v6H13z");
}

.hfr86bw5l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="fpf2snbwg"/><path class="hfr86bw5l"/></g>`,
		"fallback": "iconoven:mute-toggle-sharp",
	});
}

export default Component;

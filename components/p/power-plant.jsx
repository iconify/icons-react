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

.kqbdapbvh {
  d: path("M2.75 20.25v-16q0-1 1-1H5q1 0 1 1V10q0 1 1 1h1q1 0 1-1V7q0-1 1-1h1.25q1 0 1 1v3q0 1 1 1h7q1 0 1 1v8.25q0 1-1 1H3.75q-1 0-1-1");
}

.ytr5yacpv {
  d: path("m17 13.25l-2.25 3.25h3l-2 3");
}
</style><g class="hntgybcog"><path class="kqbdapbvh"/><path class="ytr5yacpv"/></g>`,
		"fallback": "iconoven:power-plant",
	});
}

export default Component;

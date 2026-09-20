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
		"content": `<style>.ctt_dn_1e {
  d: path("M2 11a3 3 0 0 1 3 -3 3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3");
}

.fezibpbwf {
  d: path("M3 18h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oib43sizw {
  d: path("M18 10a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.wae8aklke {
  d: path("M10 11a3 3 0 0 1 3 -3 3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3");
}
</style><g class="hntgybcog"><path class="ctt_dn_1e"/><path class="wae8aklke"/><path class="oib43sizw"/><path class="fezibpbwf"/></g>`,
		"fallback": "iconmind:token-count-outline-thin",
	});
}

export default Component;

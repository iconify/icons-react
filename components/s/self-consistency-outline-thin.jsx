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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.ds000fbnl {
  d: path("M3 7h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ids981bkm {
  d: path("m17 11 2 2 3 -3");
}

.ukjt4fb6s {
  d: path("M3 17h12");
}
</style><g class="hntgybcog"><path class="ds000fbnl"/><path class="bj2hlhbfp"/><path class="ukjt4fb6s"/><path class="ids981bkm"/></g>`,
		"fallback": "iconmind:self-consistency-outline-thin",
	});
}

export default Component;

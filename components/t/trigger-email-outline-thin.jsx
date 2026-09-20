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
		"content": `<style>.cfyvl-o0i {
  d: path("M16 12h4");
}

.gjx_cybnq {
  d: path("M2 10a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7b08xyfb {
  d: path("m4 9 3.5 3.5L11 9");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="gjx_cybnq"/><path class="m7b08xyfb"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:trigger-email-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.dpvrwwhil {
  d: path("M5 9h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyltd-baj {
  d: path("M5 13h6");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.tvpgdo31a {
  d: path("M2 6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="tvpgdo31a"/><path class="dpvrwwhil"/><path class="iyltd-baj"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:script-run-outline-thin",
	});
}

export default Component;

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

.o8od38cnm {
  d: path("M4 18h16");
}

.oidvfgqrv {
  d: path("M5 11h9");
}

.vd_7gj2tg {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wneoubc6n {
  d: path("M7 21h10");
}

.x3jo3zbbe {
  d: path("M5 7h14");
}
</style><g class="hntgybcog"><path class="vd_7gj2tg"/><path class="x3jo3zbbe"/><path class="oidvfgqrv"/><path class="o8od38cnm"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:schema-version-outline-thin",
	});
}

export default Component;

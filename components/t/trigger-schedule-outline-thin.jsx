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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0vooab0i {
  d: path("M8 9v3h3");
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.x5-v1c34k {
  d: path("M2 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}
</style><g class="hntgybcog"><path class="x5-v1c34k"/><path class="l0vooab0i"/><path class="cfyvl-o0i"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:trigger-schedule-outline-thin",
	});
}

export default Component;

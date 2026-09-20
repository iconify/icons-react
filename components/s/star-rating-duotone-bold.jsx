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
		"content": `<style>.e3yycdcdm {
  fill: currentColor;
  d: path("m17.5 8 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fgk90dbkb {
  fill: currentColor;
  d: path("m12 8 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hufxdfd1k {
  d: path("m6.5 8 2 2 -2 2 -2 -2Z");
}

.ke9vtlmtz {
  fill: currentColor;
  d: path("m6.5 8 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nesq7qlnx {
  d: path("m17.5 8 2 2 -2 2 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u4sowhi7h {
  d: path("M4 16h16");
}

.x7bkced7s {
  d: path("m12 8 2 2 -2 2 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="ke9vtlmtz"/><path class="fgk90dbkb"/><path class="e3yycdcdm"/><path class="hufxdfd1k"/><path class="x7bkced7s"/><path class="nesq7qlnx"/><path class="u4sowhi7h"/></g>`,
		"fallback": "iconmind:star-rating-duotone-bold",
	});
}

export default Component;

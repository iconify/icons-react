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
		"content": `<style>.f-d09l9vj {
  d: path("M9 10.5h6v3l-3 3 -3 -3Z");
}

.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i_rxvmb8k {
  fill: currentColor;
  d: path("M9 10.5h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}
</style><g class="nrj6p8qat"><path class="fbde_z08y"/><path class="i_rxvmb8k"/><path class="w3hyiobto"/><path class="f-d09l9vj"/></g>`,
		"fallback": "iconmind:policy-label-duotone-regular",
	});
}

export default Component;

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
		"content": `<style>.abjx4fbtp {
  d: path("M21 3L21 21L3 21L3 3L21 3Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s63qubk_z {
  d: path("M7 8L14 8M8 12L17 12M13 16L17 16");
}
</style><g class="gp_8x1bzb"><path class="abjx4fbtp"/><path class="s63qubk_z"/></g>`,
		"fallback": "keyline-icons:square-align-offset-top-sharp",
	});
}

export default Component;

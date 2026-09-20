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
		"content": `<style>.bg2ejdbaq {
  d: path("M12 5v16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nqda50bqs {
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.urilmibxp {
  d: path("M4 13h16");
}

.x37ahcyum {
  d: path("M9 2h6l-3 3Z");
}
</style><g class="hntgybcog"><path class="nqda50bqs"/><path class="bg2ejdbaq"/><path class="urilmibxp"/><path class="x37ahcyum"/></g>`,
		"fallback": "iconmind:spin-wheel-outline-thin",
	});
}

export default Component;

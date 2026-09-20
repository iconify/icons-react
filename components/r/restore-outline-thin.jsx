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

.jn_g3wbvq {
  d: path("m9 19 3 -3 3 3");
}

.miyi8eb4c {
  d: path("M4 5a8 3 0 0 0 16 0");
}

.uigc87b2x {
  d: path("M4 5a8 3 0 0 1 16 0v5a8 3 0 0 1 -16 0Z");
}

.vhf3_kexp {
  d: path("M12 16v5");
}
</style><g class="hntgybcog"><path class="uigc87b2x"/><path class="miyi8eb4c"/><path class="vhf3_kexp"/><path class="jn_g3wbvq"/></g>`,
		"fallback": "iconmind:restore-outline-thin",
	});
}

export default Component;

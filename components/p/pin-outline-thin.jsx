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

.s994z3b0d {
  d: path("M6 5h12");
}

.ubojtpbkq {
  d: path("M9 5v8l3 3 3 -3V5");
}

.vhf3_kexp {
  d: path("M12 16v5");
}
</style><g class="hntgybcog"><path class="s994z3b0d"/><path class="ubojtpbkq"/><path class="vhf3_kexp"/></g>`,
		"fallback": "iconmind:pin-outline-thin",
	});
}

export default Component;

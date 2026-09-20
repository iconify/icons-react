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

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.mjuhvrbig {
  d: path("M9 8h9v9");
}

.zg6stybep {
  d: path("M16 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="lo7kp72nh"/><path class="mjuhvrbig"/><path class="zg6stybep"/></g>`,
		"fallback": "iconmind:surrogate-key-outline-thin",
	});
}

export default Component;

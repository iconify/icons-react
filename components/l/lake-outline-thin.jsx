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

.nd-_isc6y {
  d: path("M4 12a8 5 0 1 0 16 0 8 5 0 1 0 -16 0");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.xn7bwccty {
  d: path("M8 6h8");
}
</style><g class="hntgybcog"><path class="nd-_isc6y"/><path class="rkhcgsbdl"/><path class="xn7bwccty"/></g>`,
		"fallback": "iconmind:lake-outline-thin",
	});
}

export default Component;

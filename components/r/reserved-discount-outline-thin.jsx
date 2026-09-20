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
		"content": `<style>.gwl0nvbom {
  d: path("M6 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.otxscghkz {
  d: path("M3 10a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.x7gsyjbtr {
  d: path("M14 13h5l2.5 2.5L19 18h-5Z");
}
</style><g class="hntgybcog"><path class="otxscghkz"/><path class="gwl0nvbom"/><path class="x7gsyjbtr"/></g>`,
		"fallback": "iconmind:reserved-discount-outline-thin",
	});
}

export default Component;

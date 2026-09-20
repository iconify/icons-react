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
		"content": `<style>.dwj8i8b7i {
  d: path("M6 10c1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nca7pq6lm {
  d: path("m4 10 8 -8 8 8");
}

.qcx0_7byx {
  d: path("M6 10v10h12V10");
}
</style><g class="hntgybcog"><path class="nca7pq6lm"/><path class="qcx0_7byx"/><path class="dwj8i8b7i"/></g>`,
		"fallback": "iconmind:social-event-outline-thin",
	});
}

export default Component;

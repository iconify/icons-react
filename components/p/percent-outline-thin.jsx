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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2hnp9b4t {
  d: path("M15 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nnfdo4bja {
  d: path("M5 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="emvotkb4z"/><path class="nnfdo4bja"/><path class="j2hnp9b4t"/></g>`,
		"fallback": "iconmind:percent-outline-thin",
	});
}

export default Component;

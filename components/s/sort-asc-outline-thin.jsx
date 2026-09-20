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

.mt0duqbnk {
  d: path("M4 6h6");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.xlekzhbnl {
  d: path("M4 12h11");
}
</style><g class="hntgybcog"><path class="mt0duqbnk"/><path class="xlekzhbnl"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:sort-asc-outline-thin",
	});
}

export default Component;

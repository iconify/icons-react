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

.lrzqgdjzg {
  d: path("M4 13.25a8 8 0 1 0 16 0a8 8 0 1 0-16 0M12 2.5v2.75M10 2.5h4");
}

.njl_u6bdv {
  d: path("m12.392 10.816l1.567.928a1.75 1.75 0 0 1 0 3.012l-1.567.928a1.75 1.75 0 0 1-2.642-1.505v-1.858a1.75 1.75 0 0 1 2.642-1.505");
}
</style><g class="hntgybcog"><path class="lrzqgdjzg"/><path class="njl_u6bdv"/></g>`,
		"fallback": "uix:stopwatch-start",
	});
}

export default Component;

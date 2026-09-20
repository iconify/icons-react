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
		"content": `<style>.gzza8wbrt {
  d: path("M2 5v14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_5l_3bgt {
  d: path("M5 10a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.s6i5bu6gd {
  d: path("M22 5v14");
}

.sqsxh9blm {
  d: path("M5 5h14");
}
</style><g class="hntgybcog"><path class="q_5l_3bgt"/><path class="gzza8wbrt"/><path class="s6i5bu6gd"/><path class="sqsxh9blm"/></g>`,
		"fallback": "iconmind:mtu-outline-thin",
	});
}

export default Component;

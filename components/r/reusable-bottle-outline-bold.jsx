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
		"content": `<style>.l0v-b4kbr {
  d: path("M8 12h8");
}

.le629bcat {
  d: path("M8 7v14h8V7Z");
}

.n953y9b3y {
  d: path("M10 7V3h4v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="le629bcat"/><path class="n953y9b3y"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:reusable-bottle-outline-bold",
	});
}

export default Component;

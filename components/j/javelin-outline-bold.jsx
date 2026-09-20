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
		"content": `<style>.f3ij1ab_k {
  d: path("M16 4h4v4Z");
}

.o83gk4lgi {
  d: path("M3 20 19 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u_41jqbcx {
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="o83gk4lgi"/><path class="f3ij1ab_k"/><path class="u_41jqbcx"/></g>`,
		"fallback": "iconmind:javelin-outline-bold",
	});
}

export default Component;

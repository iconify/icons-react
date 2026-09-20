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
		"content": `<style>.b_x7v_t0t {
  d: path("m12 7 3 3 -3 3 -3 -3Z");
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uto0n9pso {
  d: path("M7 16h10");
}
</style><g class="s0phu2bbs"><path class="iaozfqbuj"/><path class="b_x7v_t0t"/><path class="uto0n9pso"/></g>`,
		"fallback": "iconmind:vector-database-outline-bold",
	});
}

export default Component;

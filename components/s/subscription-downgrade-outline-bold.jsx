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
		"content": `<style>.a218-cpca {
  d: path("M4 5h16a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4V7a2 2 0 0 1 2 -2");
}

.amujw3_wp {
  d: path("m9.5 13 2.5 2.5 2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tl2fjsrpp {
  d: path("m9.5 9 2.5 2.5L14.5 9");
}
</style><g class="s0phu2bbs"><path class="a218-cpca"/><path class="tl2fjsrpp"/><path class="amujw3_wp"/></g>`,
		"fallback": "iconmind:subscription-downgrade-outline-bold",
	});
}

export default Component;

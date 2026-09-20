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

.ae0h5kb0o {
  d: path("M9 15h6");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x1_r36phd {
  d: path("M9 12h6");
}
</style><g class="s0phu2bbs"><path class="a218-cpca"/><path class="jlfjgzbqx"/><path class="x1_r36phd"/><path class="ae0h5kb0o"/></g>`,
		"fallback": "iconmind:terms-of-sale-outline-bold",
	});
}

export default Component;

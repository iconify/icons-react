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
		"content": `<style>.r_1159bkb {
  d: path("M11.5 6H14a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3V9l3 -3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.viv5gg8xx {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="viv5gg8xx"/><path class="r_1159bkb"/></g>`,
		"fallback": "iconmind:small-language-model-outline-bold",
	});
}

export default Component;

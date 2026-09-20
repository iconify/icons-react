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
		"content": `<style>.eq_hyg60b {
  fill: currentColor;
  d: path("M3 3h18l-7 7v5h-4v-5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fze4jkbok {
  fill: currentColor;
  d: path("M12.5 17.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m6o3bac1v {
  d: path("M3 3h18l-7 7v5h-4v-5Z");
}

.o062g1b0a {
  d: path("M12.5 17.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.o0ozwgb-f {
  d: path("m18 20 2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="eq_hyg60b"/><path class="fze4jkbok"/><path class="m6o3bac1v"/><path class="o062g1b0a"/><path class="o0ozwgb-f"/></g>`,
		"fallback": "iconmind:prefilter-duotone-bold",
	});
}

export default Component;

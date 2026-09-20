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
		"content": `<style>.byyzkjuye {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 11 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.er6s1rc2j {
  d: path("m15 11 2 -2 -2 -2");
}

.j4ecinbzh {
  d: path("m9 11 2 -2 -2 -2");
}

.pk7qwlbxv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 14v5h18v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.quu8uycwi {
  d: path("M3 14v5h18v-5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tjc2w5b3m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 11 2 -2 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="pk7qwlbxv"/><path class="tjc2w5b3m"/><path class="byyzkjuye"/><path class="quu8uycwi"/><path class="j4ecinbzh"/><path class="er6s1rc2j"/></g>`,
		"fallback": "iconmind:prewarm-pool-duotone-bold",
	});
}

export default Component;

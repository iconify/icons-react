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
		"content": `<style>.ddr0zpdgr {
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.eev_c9mlp {
  d: path("m7 20 5 -5 5 5");
}

.n-fiqpbfy {
  d: path("M12 10v5");
}

.qqm3sm-he {
  fill: currentColor;
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uxyzhxvwz {
  d: path("M7 12h10");
}
</style><g class="s0phu2bbs"><path class="qqm3sm-he"/><path class="ddr0zpdgr"/><path class="n-fiqpbfy"/><path class="uxyzhxvwz"/><path class="eev_c9mlp"/></g>`,
		"fallback": "iconmind:toddler-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.aj1uncbqw {
  d: path("M4 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.axsqg_b2b {
  d: path("M15 12h4");
}

.kwvl-5zwd {
  d: path("M2.5 16a4.5 4.5 0 0 1 9 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wphbr99_m {
  d: path("M13 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.yafg6v4zg {
  d: path("M15 15h4");
}
</style><g class="s0phu2bbs"><path class="aj1uncbqw"/><path class="kwvl-5zwd"/><path class="wphbr99_m"/><path class="axsqg_b2b"/><path class="yafg6v4zg"/></g>`,
		"fallback": "iconmind:personal-trainer-outline-bold",
	});
}

export default Component;

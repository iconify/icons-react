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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.d1zyr9bfc {
  d: path("M12 4v4");
}

.ghf6zpb7j {
  d: path("M14 12v6");
}

.j534ltbcb {
  d: path("M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.k7u-15-va {
  d: path("M10 12v6");
}

.m1mjigbsi {
  d: path("M4 8h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="j534ltbcb"/><path class="m1mjigbsi"/><path class="d1zyr9bfc"/><path class="k7u-15-va"/><path class="ghf6zpb7j"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:tracking-number-outline-bold",
	});
}

export default Component;

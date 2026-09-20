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
		"content": `<style>.enrpg0aoq {
  d: path("M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.icp673bbo {
  d: path("M12 9v3");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.tbr41ebiu {
  d: path("M12 12h2.5");
}
</style><g class="s0phu2bbs"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="enrpg0aoq"/><path class="icp673bbo"/><path class="tbr41ebiu"/></g>`,
		"fallback": "iconmind:span-duration-outline-bold",
	});
}

export default Component;

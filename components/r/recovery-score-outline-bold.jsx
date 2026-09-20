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
		"content": `<style>.dv6re0b-t {
  d: path("M12 16V8");
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.ogqckebrf {
  d: path("m9 11 3 -3 3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="dv6re0b-t"/><path class="ogqckebrf"/></g>`,
		"fallback": "iconmind:recovery-score-outline-bold",
	});
}

export default Component;

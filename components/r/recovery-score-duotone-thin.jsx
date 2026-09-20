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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxfmndbsk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.ogqckebrf {
  d: path("m9 11 3 -3 3 3");
}

.sspwv86yu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 11 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yd1dd2b-v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ys-dg812g {
  d: path("M3 16h18");
}

.zu-ymbcar {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 16a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zu-ymbcar"/><path class="yd1dd2b-v"/><path class="kxfmndbsk"/><path class="sspwv86yu"/><path class="ng35sb6yg"/><path class="ys-dg812g"/><path class="dv6re0b-t"/><path class="ogqckebrf"/></g>`,
		"fallback": "iconmind:recovery-score-duotone-thin",
	});
}

export default Component;

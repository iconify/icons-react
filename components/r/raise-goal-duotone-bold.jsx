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
		"content": `<style>.gp1dm629i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 11 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hazn09b_y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.5 20.5h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hspeesv2z {
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
}

.i2d4_-inn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 15v5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m490zkdbl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mu4i3ybkf {
  d: path("m10 11 2 -2 2 2");
}

.p6gr82bvc {
  d: path("m10 8 2 -2 2 2");
}

.qk5zxtb7y {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 8 2 -2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tv6hbrcra {
  d: path("M8.5 20.5h7");
}

.ujt25lh2u {
  d: path("M12 15v5.5");
}
</style><g class="s0phu2bbs"><path class="m490zkdbl"/><path class="i2d4_-inn"/><path class="hazn09b_y"/><path class="qk5zxtb7y"/><path class="gp1dm629i"/><path class="hspeesv2z"/><path class="ujt25lh2u"/><path class="tv6hbrcra"/><path class="p6gr82bvc"/><path class="mu4i3ybkf"/></g>`,
		"fallback": "iconmind:raise-goal-duotone-bold",
	});
}

export default Component;

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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.cjtmbcfpi {
  d: path("M13 18v-7h9v7");
}

.ghuq2xb5p {
  d: path("M10.5 12.5a3.5 3.5 0 0 1 0 -7");
}

.io29bblpq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 18v-7h9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k4wc6x-hq {
  d: path("M7 9v9");
}

.mq-vdkbdj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n_xjdobth {
  d: path("M3.5 5.5a3.5 3.5 0 0 1 0 7");
}

.p8dd6_bkk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 12.5a3.5 3.5 0 0 1 0 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vftleto_a {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3.5 5.5a3.5 3.5 0 0 1 0 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xa9vorq4l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="mq-vdkbdj"/><path class="vftleto_a"/><path class="p8dd6_bkk"/><path class="io29bblpq"/><path class="xa9vorq4l"/><path class="k4wc6x-hq"/><path class="n_xjdobth"/><path class="ghuq2xb5p"/><path class="cjtmbcfpi"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:resort-duotone-bold",
	});
}

export default Component;

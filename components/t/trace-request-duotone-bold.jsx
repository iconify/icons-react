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
		"content": `<style>.bie4u9bix {
  d: path("M19 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gvmyg7bww {
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.gwbi1m5_l {
  d: path("M12 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.puqp14a3r {
  d: path("m6 7 6 6");
}

.r5ic1y8rh {
  fill: currentColor;
  d: path("M12 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.t1ic5ob8h {
  fill: currentColor;
  d: path("M19 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tvw8ildel {
  fill: currentColor;
  d: path("M2 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u5k3kbbab {
  d: path("M16 15h4");
}

.ugi0trbtk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 7 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ylmhi4beb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 15h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="tvw8ildel"/><path class="r5ic1y8rh"/><path class="t1ic5ob8h"/><path class="ugi0trbtk"/><path class="ylmhi4beb"/><path class="gvmyg7bww"/><path class="puqp14a3r"/><path class="gwbi1m5_l"/><path class="u5k3kbbab"/><path class="bie4u9bix"/></g>`,
		"fallback": "iconmind:trace-request-duotone-bold",
	});
}

export default Component;

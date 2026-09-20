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
		"content": `<style>.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
}

.g2bqhonph {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 17h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hm52d9bxd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 20V10l3 -3h14l3 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kp6e_l5bx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 13h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p0hi_9aen {
  d: path("M5 17h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="s0phu2bbs"><path class="hm52d9bxd"/><path class="kp6e_l5bx"/><path class="g2bqhonph"/><path class="e77gki8ci"/><path class="y07a50u1t"/><path class="p0hi_9aen"/></g>`,
		"fallback": "iconmind:warehouse-shelf-duotone-bold",
	});
}

export default Component;

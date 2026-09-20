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
		"content": `<style>.aep_ellef {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b-pu58b8r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 5h10l3.5 3.5L16 12H6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.naxi-2ilz {
  d: path("M6 5h10l3.5 3.5L16 12H6");
}

.oqfv9rb9x {
  d: path("M2 21h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp3wfdbxm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 21h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="aep_ellef"/><path class="b-pu58b8r"/><path class="tp3wfdbxm"/><path class="ftqzjnb8u"/><path class="naxi-2ilz"/><path class="oqfv9rb9x"/></g>`,
		"fallback": "iconmind:trailhead-duotone-bold",
	});
}

export default Component;

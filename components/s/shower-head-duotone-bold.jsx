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
		"content": `<style>.g7c6_g9qq {
  d: path("M9 12v3");
}

.h1h08f6go {
  d: path("M15 12v3");
}

.hmv-0nk4s {
  d: path("M12 12v5");
}

.ixnx5hkex {
  d: path("M6 6h12l-3 3H9Z");
}

.qa1h-jbfk {
  fill: currentColor;
  d: path("M6 6h12l-3 3H9Z");
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

.yazo7scbq {
  d: path("M12 3v3");
}
</style><g class="s0phu2bbs"><path class="qa1h-jbfk"/><path class="ixnx5hkex"/><path class="yazo7scbq"/><path class="g7c6_g9qq"/><path class="hmv-0nk4s"/><path class="h1h08f6go"/></g>`,
		"fallback": "iconmind:shower-head-duotone-bold",
	});
}

export default Component;

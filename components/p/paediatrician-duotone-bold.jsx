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
		"content": `<style>.a2wn47b0j {
  fill: currentColor;
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gb43o-b8h {
  d: path("M17 2v6");
}

.h903oobjg {
  d: path("M13.5 18a3.5 3.5 0 0 1 7 0");
}

.hzn91qbfm {
  d: path("M14 5h6");
}

.k939z7b-y {
  d: path("M15 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qgakjvb1f {
  fill: currentColor;
  d: path("M15 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.v1odfppiu {
  d: path("M2.5 17a4.5 4.5 0 0 1 9 0");
}
</style><g class="s0phu2bbs"><path class="a2wn47b0j"/><path class="qgakjvb1f"/><path class="myekf3bzc"/><path class="v1odfppiu"/><path class="k939z7b-y"/><path class="h903oobjg"/><path class="gb43o-b8h"/><path class="hzn91qbfm"/></g>`,
		"fallback": "iconmind:paediatrician-duotone-bold",
	});
}

export default Component;

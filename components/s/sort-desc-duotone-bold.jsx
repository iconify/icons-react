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
		"content": `<style>.gzq8esb7v {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 6h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hq_tvkb6k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k4qo1xe9v {
  d: path("M4 6h16");
}

.kaukupb-u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 12h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vybq366mg {
  d: path("M4 18h6");
}

.xlekzhbnl {
  d: path("M4 12h11");
}
</style><g class="s0phu2bbs"><path class="gzq8esb7v"/><path class="kaukupb-u"/><path class="hq_tvkb6k"/><path class="k4qo1xe9v"/><path class="xlekzhbnl"/><path class="vybq366mg"/></g>`,
		"fallback": "iconmind:sort-desc-duotone-bold",
	});
}

export default Component;

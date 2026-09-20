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
		"content": `<style>.hv2175vjd {
  d: path("M17 16v3");
}

.oe3oa5b3b {
  fill: currentColor;
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
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

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w0e70wbbt {
  d: path("M3 21.5h18");
}

.wfd41abkg {
  d: path("M5 10v9");
}

.y8ixl0bte {
  d: path("M11 13v6");
}
</style><g class="s0phu2bbs"><path class="oe3oa5b3b"/><path class="wfd41abkg"/><path class="y8ixl0bte"/><path class="hv2175vjd"/><path class="w0e70wbbt"/><path class="w08657bnd"/></g>`,
		"fallback": "iconmind:marginal-roi-duotone-bold",
	});
}

export default Component;

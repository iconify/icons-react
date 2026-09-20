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
		"content": `<style>.awx6ohc-u {
  d: path("M16 15h3");
}

.h6d75qzkp {
  d: path("M11.5 15a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.ln075ccaf {
  d: path("M16 12v3");
}

.nvu1cl7xd {
  d: path("M3 10h9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="nvu1cl7xd"/><path class="h6d75qzkp"/><path class="ln075ccaf"/><path class="awx6ohc-u"/></g>`,
		"fallback": "iconmind:sla-freshness-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.bb7inz33j {
  d: path("M13.5 5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.hnwta_3qv {
  d: path("M2 5a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.iee2p0bnv {
  d: path("m16 18 -3 3");
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hnwta_3qv"/><path class="bb7inz33j"/><path class="nqnw98byf"/><path class="l1jjkky7x"/><path class="iee2p0bnv"/></g>`,
		"fallback": "iconmind:udp-outline-bold",
	});
}

export default Component;

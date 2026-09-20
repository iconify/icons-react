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
		"content": `<style>.blr0emf2f {
  d: path("M2 10.5h3");
}

.miyyng58j {
  d: path("M19 10.5h3");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yswcs68im {
  d: path("M5 10.5A3.5 3.5 0 0 1 8.5 7h7a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1 -3.5 3.5h-7A3.5 3.5 0 0 1 5 10.5");
}
</style><g class="s0phu2bbs"><path class="yswcs68im"/><path class="blr0emf2f"/><path class="miyyng58j"/><path class="oifr9zbpt"/></g>`,
		"fallback": "iconmind:rolling-pin-outline-bold",
	});
}

export default Component;

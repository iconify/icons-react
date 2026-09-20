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
		"content": `<style>.ef-jgqbdk {
  d: path("M4 3v18h10V3Z");
}

.k4p4tzbhq {
  d: path("M17 13v6h5v-6Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y_j9zzqtv {
  d: path("M17.5 13a2 2 0 0 1 4 0");
}
</style><g class="s0phu2bbs"><path class="ef-jgqbdk"/><path class="k4p4tzbhq"/><path class="y_j9zzqtv"/></g>`,
		"fallback": "iconmind:lock-door-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.bwqs5tbzt {
  d: path("M11.5 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.gf918zbnb {
  d: path("M11 18h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9d013d3m {
  d: path("M9 2v20");
}

.r6n4eub3d {
  d: path("M11 7h7");
}
</style><g class="hntgybcog"><path class="d3xn50bni"/><path class="j9d013d3m"/><path class="r6n4eub3d"/><path class="bwqs5tbzt"/><path class="gf918zbnb"/></g>`,
		"fallback": "iconmind:trip-day-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kyx8xyb8s {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 13h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nwi87ac4g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 20V10l3 -3h14l3 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p0hi_9aen {
  d: path("M5 17h14");
}

.wo4w2lbba {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 17h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="hntgybcog"><path class="nwi87ac4g"/><path class="kyx8xyb8s"/><path class="wo4w2lbba"/><path class="e77gki8ci"/><path class="y07a50u1t"/><path class="p0hi_9aen"/></g>`,
		"fallback": "iconmind:warehouse-shelf-duotone-thin",
	});
}

export default Component;

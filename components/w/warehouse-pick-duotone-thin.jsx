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

.jdqylbbkf {
  d: path("m9 14 2 2 4 -4");
}

.jsa3evxgh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 14 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nwi87ac4g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 20V10l3 -3h14l3 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="nwi87ac4g"/><path class="jsa3evxgh"/><path class="e77gki8ci"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:warehouse-pick-duotone-thin",
	});
}

export default Component;

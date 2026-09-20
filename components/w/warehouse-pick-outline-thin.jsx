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
</style><g class="hntgybcog"><path class="e77gki8ci"/><path class="jdqylbbkf"/></g>`,
		"fallback": "iconmind:warehouse-pick-outline-thin",
	});
}

export default Component;

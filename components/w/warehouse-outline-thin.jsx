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

.gfzbj7b6z {
  d: path("M14 14.5a2.5 2.5 0 0 1 2.5 -2.5 2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1 -2.5 2.5 2.5 2.5 0 0 1 -2.5 -2.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jr8d9xc7c {
  d: path("M6 14.5A2.5 2.5 0 0 1 8.5 12a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 8.5 20 2.5 2.5 0 0 1 6 17.5Z");
}
</style><g class="hntgybcog"><path class="e77gki8ci"/><path class="jr8d9xc7c"/><path class="gfzbj7b6z"/></g>`,
		"fallback": "iconmind:warehouse-outline-thin",
	});
}

export default Component;

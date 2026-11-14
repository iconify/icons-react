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
		"content": `<style>.bg6xnqb5s {
  d: path("M12 15q-1.5 2 0 3.75M12 15q2.75 0 3.25-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvt8mbb9t {
  d: path("M6.5 4h11A3.5 3.5 0 0 1 21 7.5V18a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V7.5A3.5 3.5 0 0 1 6.5 4M3 8.25h18M8 2.5v3m8-3v3");
}

.u74e7hbun {
  d: path("M8.25 15a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="mvt8mbb9t"/><path class="u74e7hbun"/><path class="bg6xnqb5s"/></g>`,
		"fallback": "uix:volleyball-calendar",
	});
}

export default Component;

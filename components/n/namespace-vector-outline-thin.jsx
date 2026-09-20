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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.c54h9zbhk {
  d: path("M13 10h2.5v5H13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rebugbb0e {
  d: path("M11 10H8.5v5H11");
}
</style><g class="hntgybcog"><path class="b5ic9acln"/><path class="rebugbb0e"/><path class="c54h9zbhk"/></g>`,
		"fallback": "iconmind:namespace-vector-outline-thin",
	});
}

export default Component;

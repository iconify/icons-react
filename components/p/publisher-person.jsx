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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j9-ez86da {
  d: path("M12 17q-1.125-1.125-3-.75v4q1.875-.375 3 .75q1.125-1.125 3-.75v-4q-1.875-.375-3 .75m0 0v4");
}

.x25fue1gb {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M4 21.5c0-5 3.5-8.5 8-8.5s8 3.5 8 8.5");
}
</style><g class="hntgybcog"><path class="x25fue1gb"/><path class="j9-ez86da"/></g>`,
		"fallback": "uix:publisher-person",
	});
}

export default Component;

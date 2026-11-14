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

.nnsffcbyt {
  d: path("M18 18.25a1.75 1.75 0 0 1 0-3.5");
}

.pgk0knbpn {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9.5h7");
}

.s64l1jbhn {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0m-4.75 7.5h3.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-1.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="pgk0knbpn"/><path class="s64l1jbhn"/><path class="nnsffcbyt"/></g>`,
		"fallback": "uix:store-pickup",
	});
}

export default Component;

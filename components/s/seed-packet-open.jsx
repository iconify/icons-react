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

.xhi6qgbno {
  fill: currentColor;
  d: path("M17 8.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0m2 4.5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0m-2 5a1 1.5 0 1 0 2 0a1 1.5 0 1 0-2 0");
}

.z7510wrij {
  d: path("M8.75 18v-6.5m0 2Q6 13.5 6 11q2.75 0 2.75 2.5m0 0q2.75 0 2.75-2.5q-2.75 0-2.75 2.5");
}

.zpw3t180m {
  d: path("M3 19.75V6.725a1.75 1.75 0 0 1 .513-1.238L4 5a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 0 2 0a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 0 2 0l.25-.25a1.06 1.06 0 0 1 1.5 0l.237.237a1.75 1.75 0 0 1 .513 1.238V19.75a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 3 19.75");
}
</style><g class="hntgybcog"><path class="zpw3t180m"/><path class="z7510wrij"/><path class="xhi6qgbno"/></g>`,
		"fallback": "uix:seed-packet-open",
	});
}

export default Component;

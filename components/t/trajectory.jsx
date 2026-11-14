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

.lj14osbeo {
  d: path("M16 12.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2.5 20h19");
}

.vt4qe7bak {
  d: path("M4 20C6 4 14 2.5 17.5 10");
}
</style><g class="hntgybcog"><path class="vt4qe7bak"/><path class="lj14osbeo"/></g>`,
		"fallback": "uix:trajectory",
	});
}

export default Component;

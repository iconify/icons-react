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

.xvg3716pb {
  d: path("M6 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-1 16v-7A3.5 3.5 0 0 1 8.5 11h3m1.75-1.5h5.5a1.75 1.75 0 0 1 1.75 1.75v5A1.75 1.75 0 0 1 18.75 18h-5.5a1.75 1.75 0 0 1-1.75-1.75v-5a1.75 1.75 0 0 1 1.75-1.75");
}

.zvc50jbfl {
  d: path("M8 14v2h3.5m1 2v3.5m3.5-12v3");
}
</style><g class="hntgybcog"><path class="xvg3716pb"/><path class="zvc50jbfl"/></g>`,
		"fallback": "uix:person-carrying-box",
	});
}

export default Component;

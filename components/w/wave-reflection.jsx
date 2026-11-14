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
		"content": `<style>.dqh8ebbgp {
  d: path("M16.5 5H20v3.5M3 20h18");
}

.ie9fhtb8y {
  d: path("m4 5l8 11.5L20 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ie9fhtb8y"/><path class="dqh8ebbgp"/></g>`,
		"fallback": "uix-sharp:wave-reflection",
	});
}

export default Component;

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
		"content": `<style>.hn30vywcg {
  d: path("M4 21.5h6m-3 0v-15a3 3 0 0 1 3-3h3V5");
}

.s2bdnfbtn {
  d: path("M10.5 7.5a2.5 2.5 0 0 1 5 0Zm9-3.5h.01m1.99 14a4 4 0 1 1-5-4.5a3.5 3.5 0 0 0 5 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn30vywcg"/><path class="s2bdnfbtn"/></g>`,
		"fallback": "uix-sharp:lighting-curfew",
	});
}

export default Component;

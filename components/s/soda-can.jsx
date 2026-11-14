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
		"content": `<style>.n41ehcbpp {
  d: path("M5.5 5.75V18.5a6.5 2.5 0 0 0 13 0V5.75m-8 0h3");
}

.s5hsg3bvx {
  d: path("M5.5 5.75a6.5 2.75 0 1 0 13 0a6.5 2.75 0 1 0-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s5hsg3bvx"/><path class="n41ehcbpp"/></g>`,
		"fallback": "uix-sharp:soda-can",
	});
}

export default Component;

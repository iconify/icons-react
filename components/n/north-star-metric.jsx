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
		"content": `<style>.ffdjruqxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2l1.768 6.232L20 10l-6.232 1.768L12 18l-1.768-6.232L4 10l6.232-1.768ZM2.5 20.5h19");
}
</style><path class="ffdjruqxq"/>`,
		"fallback": "uix-sharp:north-star-metric",
	});
}

export default Component;

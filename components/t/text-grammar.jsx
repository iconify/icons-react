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
		"content": `<style>.jnk2enbgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h19M2.5 9h12m-12 4q1.5-2 3 0t3 0t3 0t3 0m.25 5l2 2L21 15.75");
}
</style><path class="jnk2enbgr"/>`,
		"fallback": "uix-sharp:text-grammar",
	});
}

export default Component;

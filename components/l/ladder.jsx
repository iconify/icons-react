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
		"content": `<style>.rk1xhubqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 2.5l-2 19m11-19l2 19M7 7h10M6.5 12h11M6 17h12");
}
</style><path class="rk1xhubqy"/>`,
		"fallback": "uix-sharp:ladder",
	});
}

export default Component;

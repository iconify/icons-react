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
		"content": `<style>.db0t-jucs {
  d: path("M16 7V4h2v4.75m-3 7.5h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}

.mvq88gbfh {
  d: path("M11.86 20.5H4v-10l8-7l8 7v.84");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mvq88gbfh"/><path class="db0t-jucs"/></g>`,
		"fallback": "uix-sharp:mortgage-remortgage",
	});
}

export default Component;

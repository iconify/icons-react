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
		"content": `<style>.xt0502bco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.7 17.5H3v-15h13.5v12.8M3 10.5h13.5m-6.75-8v8m-3.25 7v3m6.5-3v1.3m0 .9v.8m9-1.25h-5.5m2.5-2.5l-2.5 2.5l2.5 2.5");
}
</style><path class="xt0502bco"/>`,
		"fallback": "uix-sharp:person-boarding",
	});
}

export default Component;

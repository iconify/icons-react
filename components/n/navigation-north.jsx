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
		"content": `<style>.qkhcjdotc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l6 10l-6-2.5l-6 2.5Zm-3.5 19v-6l7 6v-6");
}
</style><path class="qkhcjdotc"/>`,
		"fallback": "uix-sharp:navigation-north",
	});
}

export default Component;

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
		"content": `<style>.c7zlubqyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.25 12.95l3.25 7.25l.25.55h-7.5l.25-.55l3.25-7.25l.25-.55zm-9 2.55l17.5-6.25M5.5 14.7v-3.5m13-1.15v-3.5");
}
</style><path class="c7zlubqyb"/>`,
		"fallback": "iconoven:playground-sharp",
	});
}

export default Component;

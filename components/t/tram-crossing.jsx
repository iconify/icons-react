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
		"content": `<style>.sj75gibxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 21.5l5-10m12 10l-5-10M2.5 15h19m-19 4h19M8 2.5l8 6m0-6l-8 6");
}
</style><path class="sj75gibxm"/>`,
		"fallback": "uix-sharp:tram-crossing",
	});
}

export default Component;

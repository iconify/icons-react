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
		"content": `<style>.zycuo-boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5L3 8.5h1.75l.5 3.5H7l.5 3.5h1.75l.5 3.5h4.5l.5-3.5h1.75L17 12h1.75l.5-3.5H21l.5-3.5");
}
</style><path class="zycuo-boq"/>`,
		"fallback": "uix-sharp:open-pit-benches",
	});
}

export default Component;

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
		"content": `<style>.pz90f365g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19c4-1 5.5-5 6.5-8.5c1.5-5 6.5-7 10-4.75c2 1.25 1.5 4.25-1 4.5C16.75 10.5 16 9 17 8M3 19h18");
}
</style><path class="pz90f365g"/>`,
		"fallback": "uix-sharp:wave-crest",
	});
}

export default Component;

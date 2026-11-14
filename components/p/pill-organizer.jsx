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
		"content": `<style>.mmk48zb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7h19.25v10H2.5Zm0 4h19.25M5.25 7v4M8 7v4m2.75-4v4m2.75-4v4m2.75-4v4M19 7v4");
}
</style><path class="mmk48zb0j"/>`,
		"fallback": "uix-sharp:pill-organizer",
	});
}

export default Component;

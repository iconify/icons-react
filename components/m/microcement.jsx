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
		"content": `<style>.vushgmb6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4h9v3.5h-9Zm2 3.5v5m-8 0h16M2.5 15.25h19V20h-19Z");
}
</style><path class="vushgmb6y"/>`,
		"fallback": "uix-sharp:microcement",
	});
}

export default Component;

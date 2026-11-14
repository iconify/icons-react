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
		"content": `<style>.ia33kzb0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5H7.5a4.5 4.5 0 0 0 0 9H9m6-9h1.5a4.5 4.5 0 0 1 0 9H15M8.5 12h7");
}
</style><path class="ia33kzb0n"/>`,
		"fallback": "uix-sharp:link",
	});
}

export default Component;

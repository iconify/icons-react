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
		"content": `<style>.l3fkd1z4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19h18M3 19L17 5m-5.5 14A8.5 8.5 0 0 0 9 13");
}
</style><path class="l3fkd1z4z"/>`,
		"fallback": "uix-sharp:measure-angle",
	});
}

export default Component;

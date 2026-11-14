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
		"content": `<style>.g7r6ur6ku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.5 4.5l3.5.75V10c2.75.5 4.5 2.25 4.5 5v1.5h-8Zm1.5 12V19m3-2.5V19m2.5-2.5V19m-10-14.5L7 5.25V10c-2.75.5-4.5 2.25-4.5 5v1.5h8ZM9 16.5V19m-3-2.5V19m-2.5-2.5V19");
}
</style><path class="g7r6ur6ku"/>`,
		"fallback": "uix-sharp:soccer-boots-pair",
	});
}

export default Component;

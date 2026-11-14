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
		"content": `<style>.pega3f-np {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 21.5V9a6 6 0 0 1 12 0v12.5Zm3.5-11h5m3.5 3.5h2.75V6.5h2V9h-2");
}
</style><path class="pega3f-np"/>`,
		"fallback": "uix-sharp:mailbox-street",
	});
}

export default Component;

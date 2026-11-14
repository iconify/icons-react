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
		"content": `<style>.g4mznwn1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.6v-.1h11v11.1m0 7.8v.1h-11V10.4m4 8.1h3m-3-13.25h3M3.5 3.5l17 17");
}
</style><path class="g4mznwn1j"/>`,
		"fallback": "uix-sharp:no-phones",
	});
}

export default Component;

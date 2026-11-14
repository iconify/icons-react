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
		"content": `<style>.dzigwe75v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h17m-17 11h17m-17-13v15m17-15v15M6.5 12H17m-2.75-2.75L17 12l-2.75 2.75");
}
</style><path class="dzigwe75v"/>`,
		"fallback": "uix-sharp:pipe-flow-direction",
	});
}

export default Component;

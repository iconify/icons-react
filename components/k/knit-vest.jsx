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
		"content": `<style>.qjx2p50hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 3l3.5 7l3.5-7h2c0 4 1 6 2.5 6.5V21H4V9.5C5.5 9 6.5 7 6.5 3ZM4 17.5h16m-12 0V21m4-3.5V21m4-3.5V21");
}
</style><path class="qjx2p50hr"/>`,
		"fallback": "uix-sharp:knit-vest",
	});
}

export default Component;

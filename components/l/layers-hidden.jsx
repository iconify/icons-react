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
		"content": `<style>.hjfna-wsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.781 4.788L12 3l9 5l-5.773 3.207M5.436 9.353L3 8l.711-.395M3 12l9 5l.703-.391m5.07-2.816L21 12M3 16l9 5l3.238-1.799m5.07-2.817L21 16M3.5 3.5l17 17");
}
</style><path class="hjfna-wsu"/>`,
		"fallback": "uix-sharp:layers-hidden",
	});
}

export default Component;

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
		"content": `<style>.glicc6boj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16v6H4Zm0 13h16v6H4ZM2.5 12h6l1.75-1.25l1.75 2.5l1.75-2.5L15.5 12h6");
}
</style><path class="glicc6boj"/>`,
		"fallback": "uix-sharp:pinched-nerve",
	});
}

export default Component;

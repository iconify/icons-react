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
		"content": `<style>.f52_wmbcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v19H3Zm4.5 4v11M6 14h3m3-7.5v11M10.5 9h3m3-2.5v11m-1.5-5h3");
}
</style><path class="f52_wmbcg"/>`,
		"fallback": "uix-sharp:room-controls",
	});
}

export default Component;

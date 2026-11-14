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
		"content": `<style>.qv0n09bsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12h6v9.5H9Zm-3-2h12v2H6Zm4.75 0l.5-7c.1-.75 1.4-.75 1.5 0l.5 7m-2.75 6h3");
}
</style><path class="qv0n09bsx"/>`,
		"fallback": "uix-sharp:naloxone",
	});
}

export default Component;

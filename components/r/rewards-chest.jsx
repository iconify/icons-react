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
		"content": `<style>.g62sjn4zc {
  d: path("M3 10h18v10.5H3Zm0 0a9 6 0 0 1 18 0M3 14.5h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vwk13s-_u {
  d: path("M10.5 13h3v4.5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="g62sjn4zc"/><path class="vwk13s-_u"/></g>`,
		"fallback": "uix-sharp:rewards-chest",
	});
}

export default Component;

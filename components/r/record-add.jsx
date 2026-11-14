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
		"content": `<style>.kplkgkb3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 12.5H2.5V5h19v7.5h-.7M8.5 5v7.5m6-7.5v7.5m3.5 2v7M14.5 18h7");
}
</style><path class="kplkgkb3p"/>`,
		"fallback": "uix-sharp:record-add",
	});
}

export default Component;

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
		"content": `<style>.asx3i0b7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v6H3Zm2 0V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M6 17v3m12-3v3");
}
</style><path class="asx3i0b7i"/>`,
		"fallback": "uix-sharp:living-room",
	});
}

export default Component;

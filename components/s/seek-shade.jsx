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
		"content": `<style>.pbgjfcbsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a9 8 0 0 1 18 0q-3-1.5-6 0q-3-1.5-6 0q-3-1.5-6 0Zm9-.75V19m-6 1a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0Z");
}
</style><path class="pbgjfcbsg"/>`,
		"fallback": "uix-sharp:seek-shade",
	});
}

export default Component;

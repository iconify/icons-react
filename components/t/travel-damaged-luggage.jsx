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
		"content": `<style>.csvy5fbyw {
  d: path("m12 7l-1.5 4l3 2l-2 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vur2v8bhk {
  d: path("M4 7h16v13H4Zm5 0V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7");
}
</style><g class="ulnmmdpxh"><path class="vur2v8bhk"/><path class="csvy5fbyw"/></g>`,
		"fallback": "uix-sharp:travel-damaged-luggage",
	});
}

export default Component;

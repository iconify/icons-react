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
		"content": `<style>.by8f9v1yj {
  d: path("m9.5 10.5l1.75 1.75L15 8.5");
}

.gmlvv0bjg {
  d: path("M2 6.5h20v9H2Zm3.5 9v3m3-3v3m7-3v3m3-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gmlvv0bjg"/><path class="by8f9v1yj"/></g>`,
		"fallback": "uix-sharp:ram-check",
	});
}

export default Component;

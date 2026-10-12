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
		"content": `<style>.ix1rbnbtt {
  cx: 12px;
  cy: 8px;
  r: 5.25px;
}

.ukn-ncd_o {
  d: path("M14.25 8a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 1 1 4.5 0m-11.5 7.75h18.5v5.5H2.75zm3.75 0v2m4-2v2m4-2v2m4-2v2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ix1rbnbtt"/><path class="ukn-ncd_o"/></g>`,
		"fallback": "iconoven:tailor-tape-sharp",
	});
}

export default Component;

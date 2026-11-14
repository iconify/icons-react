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
		"content": `<style>.orvwi5bgn {
  d: path("M8 9.5h8v6H8Zm4 9h.01");
}

.uecmt_b0z {
  d: path("M4 2.5h16v19H4Zm4 4h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uecmt_b0z"/><path class="orvwi5bgn"/></g>`,
		"fallback": "uix-sharp:pdf-magazine",
	});
}

export default Component;

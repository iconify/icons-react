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
		"content": `<style>.k1nly_hgn {
  d: path("M7.5 6.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm-7 6h9v5h-9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zijoocb-r {
  d: path("M4 3.5h16v17H4Zm0 6h16");
}
</style><g class="ulnmmdpxh"><path class="zijoocb-r"/><path class="k1nly_hgn"/></g>`,
		"fallback": "uix-sharp:kitchen-range",
	});
}

export default Component;

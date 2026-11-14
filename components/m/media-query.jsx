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
		"content": `<style>.dr8b_wbob {
  d: path("M2 3.5h20V17H2ZM12 17v3.5m-4 0h8M6.5 10.25h11");
}

.gb26_k93p {
  d: path("m8.5 8.25l-2 2l2 2m7-4l2 2l-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dr8b_wbob"/><path class="gb26_k93p"/></g>`,
		"fallback": "uix-sharp:media-query",
	});
}

export default Component;

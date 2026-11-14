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
		"content": `<style>.a5ctwrk6g {
  d: path("M9.5 2.5h5l3 3L12 10L6.5 5.5Zm-3 3h11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7qiec58o {
  d: path("M6.25 15.75a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="v7qiec58o"/><path class="a5ctwrk6g"/></g>`,
		"fallback": "uix-sharp:ring",
	});
}

export default Component;

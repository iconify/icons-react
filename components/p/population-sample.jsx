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
		"content": `<style>.bufovpb9v {
  d: path("M6.75 12.5a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0Z");
}

.cvy9dccma {
  d: path("M10.25 10.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM9 16.25c0-1.5 1.25-2.5 3-2.5s3 1 3 2.5m-12.75-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 4.5c0-1.25.5-2 1.5-2s1.5.75 1.5 2m13.5-4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 4.5c0-1.25.5-2 1.5-2s1.5.75 1.5 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bufovpb9v"/><path class="cvy9dccma"/></g>`,
		"fallback": "uix-sharp:population-sample",
	});
}

export default Component;

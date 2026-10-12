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
		"content": `<style>.r-ph-xb0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25a17 17 0 0 1 18.5 0M2.75 11.5c2.75 0 3.25-5 6.25-5s3.5 8.5 6.5 8.5s4-2.5 5-4.5m-2.75 1.19l2.75-1.19l.7 2.92");
}
</style><path class="r-ph-xb0f"/>`,
		"fallback": "iconoven:jet-stream-sharp",
	});
}

export default Component;

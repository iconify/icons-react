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
		"content": `<style>.evw6m15eg {
  d: path("M7 11.75V16c1.25 1.25 3 2 5 2s3.75-.75 5-2v-4.25m3.5-2.25V15");
}

.t25oj4bxw {
  d: path("m3.5 9.5l8.5-4l8.5 4l-8.5 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t25oj4bxw"/><path class="evw6m15eg"/></g>`,
		"fallback": "uix-sharp:staff-training",
	});
}

export default Component;

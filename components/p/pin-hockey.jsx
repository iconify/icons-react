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
		"content": `<style>.bq1cycbqg {
  d: path("M14 2.5L8.5 16h-4a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h6a1.5 1.5 0 0 0 1.5-1l5-16Zm1 14a3.25 1.75 0 1 0 6.5 0a3.25 1.75 0 1 0-6.5 0Z");
}

.rjr10ffwn {
  d: path("M15 16.5v2a3.25 1.75 0 0 0 6.5 0v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bq1cycbqg"/><path class="rjr10ffwn"/></g>`,
		"fallback": "uix-sharp:pin-hockey",
	});
}

export default Component;

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
		"content": `<style>.k9t7m5aoi {
  d: path("M2.5 12c1.5 6 3.25 6 4.75 0S10.5 6 12 12s3.25 6 4.75 0S20 6 21.5 12");
}

.ok0p5z5ai {
  d: path("M2.5 12C4 6 5.75 6 7.25 12s3.25 6 4.75 0s3.25-6 4.75 0s3.25 6 4.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ok0p5z5ai"/><path class="k9t7m5aoi"/></g>`,
		"fallback": "uix-sharp:interference-pattern",
	});
}

export default Component;

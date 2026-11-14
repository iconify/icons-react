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
		"content": `<style>.h4s22dbpt {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Z");
}

.srtt-kbqc {
  d: path("M10.75 4.25h2.5l-1.25 2Zm4.5 2L16 5m1.75 3.75L19 8m-.5 4H20m-2.25 3.25L19 16m-3.75 1.75L16 19m-4-.5V20m-3.25-2.25L8 19m-1.75-3.75L5 16m.5-4H4m2.25-3.25L5 8m3.75-1.75L8 5m.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM12 9.75v4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h4s22dbpt"/><path class="srtt-kbqc"/></g>`,
		"fallback": "uix-sharp:vault-dial",
	});
}

export default Component;

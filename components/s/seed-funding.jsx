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
		"content": `<style>.jkq1_ubtq {
  d: path("M4.5 16.5v2a7.5 3 0 0 0 15 0v-2m-7.5-3V7m0 2c0-3.5 2.5-6 7-6c0 3.5-2.5 6-7 6Zm0 1.5C12 8 10 6 6 6c0 2.75 2 4.5 6 4.5Z");
}

.kda6lpa_w {
  d: path("M4.5 16.5a7.5 3 0 1 0 15 0a7.5 3 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kda6lpa_w"/><path class="jkq1_ubtq"/></g>`,
		"fallback": "uix-sharp:seed-funding",
	});
}

export default Component;

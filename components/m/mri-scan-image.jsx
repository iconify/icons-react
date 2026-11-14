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
		"content": `<style>.a9-k66bcy {
  d: path("M9.75 7.75c-1.25 1 .25 2.5-1 3.75S9 14.25 8.5 16m5.75-8.25c1.25 1-.25 2.5 1 3.75s-.25 2.75.25 4.5");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nf6tyj28s {
  d: path("M6.5 12a5.5 6.75 0 1 0 11 0a5.5 6.75 0 1 0-11 0ZM12 5.25v13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="nf6tyj28s"/><path class="a9-k66bcy"/></g>`,
		"fallback": "uix-sharp:mri-scan-image",
	});
}

export default Component;

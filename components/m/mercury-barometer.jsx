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
		"content": `<style>.qxo0bqb2r {
  d: path("M8 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM13.75 6.5h2.5m-2.5 3.5h1.75m-1.75 3.5h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v76ehstsa {
  d: path("M5 2.5h14v19H5Zm5 3v9.25");
}
</style><g class="ulnmmdpxh"><path class="v76ehstsa"/><path class="qxo0bqb2r"/></g>`,
		"fallback": "uix-sharp:mercury-barometer",
	});
}

export default Component;

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
		"content": `<style>.cs72wobds {
  d: path("M19.5 2.5v19H4");
}

.sf_3cnb4f {
  d: path("M8.5 12.5a3.5 9.5 0 1 0 7 0a3.5 9.5 0 1 0-7 0Zm5.552-5.638L9.948 18.138");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sf_3cnb4f"/><path class="cs72wobds"/></g>`,
		"fallback": "uix-sharp:surf-shop",
	});
}

export default Component;

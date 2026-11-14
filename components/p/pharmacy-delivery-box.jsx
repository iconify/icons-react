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
		"content": `<style>.fncur87gl {
  d: path("M11.6 19H2.5V3h17v8.7M2.5 8h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu230mbui {
  d: path("M9.25 3v8.5h4.5V3M18 14.5v7m-3-3l3 3l3-3");
}
</style><g class="ulnmmdpxh"><path class="fncur87gl"/><path class="vu230mbui"/></g>`,
		"fallback": "uix-sharp:pharmacy-delivery-box",
	});
}

export default Component;

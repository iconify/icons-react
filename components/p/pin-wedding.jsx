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
		"content": `<style>.cm6pkzaqa {
  d: path("M20.322 14.77a6 6 0 1 1 .536-4.069");
}

.cx4u3ybib {
  d: path("M13 4.25L14 3h2l1 1.25L15 6Z");
}

.sk5kzbc8q {
  d: path("M3.678 12.23a6 6 0 1 1-.536 4.069");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sk5kzbc8q"/><path class="cm6pkzaqa"/><path class="cx4u3ybib"/></g>`,
		"fallback": "uix-sharp:pin-wedding",
	});
}

export default Component;

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
		"content": `<style>.ne-225b8l {
  d: path("M6 16c2.5 0 3.5-4 6-4s3.5-3.5 6-3.5");
}

.sbi1spbtc {
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Zm6-2.5v6.7M15 6v.7m0 7.1v6.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sbi1spbtc"/><path class="ne-225b8l"/></g>`,
		"fallback": "uix-sharp:map-route",
	});
}

export default Component;

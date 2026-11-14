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
		"content": `<style>.g3faglbvb {
  d: path("M8.5 3h4v4.5h-4Zm6.75 4.5a2.25 2.25 0 0 1 4.5 0");
}

.j41zkcmgu {
  d: path("M2.5 4h2l3 11.5H18l2.5-8h-15m2 12.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j41zkcmgu"/><path class="g3faglbvb"/></g>`,
		"fallback": "uix-sharp:pin-supermarket",
	});
}

export default Component;

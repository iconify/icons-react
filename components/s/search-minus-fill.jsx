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
		"content": `<style>.hghc-489l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 10C18 14.4183 14.4183 18 10 18C5.5817 18 2 14.4183 2 10C2 5.5817 5.5817 2 10 2C14.4183 2 18 5.5817 18 10ZM7 11L13 11C13.5523 11 14 10.5523 14 10C14 9.4477 13.5523 9 13 9L7 9C6.4477 9 6 9.4477 6 10C6 10.5523 6.4477 11 7 11Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xexl16bfr {
  d: path("M15 15L21 21");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="hghc-489l"/><path class="xexl16bfr"/></g>`,
		"fallback": "keyline-icons:search-minus-fill",
	});
}

export default Component;

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
		"content": `<style>.gns-czbtr {
  d: path("m8.5 8.5l1-3h5l1 3Zm1 0V13h5V8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnfkppc2r {
  d: path("M12 21.5c-3-3-7.5-7.5-7.5-12a7.5 7.5 0 0 1 15 0c0 4.5-4.5 9-7.5 12");
}
</style><g class="hntgybcog"><path class="xnfkppc2r"/><path class="gns-czbtr"/></g>`,
		"fallback": "uix:map-shop-marker",
	});
}

export default Component;

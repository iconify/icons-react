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
		"content": `<style>.rrfif82ny {
  d: path("M3.5 3h3v13h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xh6-oe9fo {
  d: path("m13 16l2.5-3.5l2 2l3-5.5");
}

.z3_mt7brr {
  d: path("M2.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8-15v17H21");
}
</style><g class="ulnmmdpxh"><path class="rrfif82ny"/><path class="z3_mt7brr"/><path class="xh6-oe9fo"/></g>`,
		"fallback": "uix-sharp:lab-sensor",
	});
}

export default Component;

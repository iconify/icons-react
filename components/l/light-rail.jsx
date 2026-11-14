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
		"content": `<style>.dsdyt5bjg {
  d: path("M6.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM2.5 21h19");
}

.otw368bkp {
  d: path("M3.5 7.5h17v10h-17Zm-.5-5h18m-9 0V5M9 7.5L12 5l3 2.5m-11.5 4h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="otw368bkp"/><path class="dsdyt5bjg"/></g>`,
		"fallback": "uix-sharp:light-rail",
	});
}

export default Component;

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
		"content": `<style>.cm7x2xb1v {
  d: path("M11 6h3v2l2 5H9l2-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wuixsugxy {
  d: path("M5 18.5V5a2 2 0 0 1 2-2h12v13.5H7a2 2 0 0 0 0 4h12");
}
</style><g class="ulnmmdpxh"><path class="wuixsugxy"/><path class="cm7x2xb1v"/></g>`,
		"fallback": "uix-sharp:lab-notebook",
	});
}

export default Component;

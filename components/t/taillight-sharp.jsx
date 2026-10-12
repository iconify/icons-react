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
		"content": `<style>.w8m5b0y_s {
  d: path("M5.25 6.5h16v11H8.5l-1.89-1.64l-1.97-1.72l-1.89-1.64v-6z");
}

.wqv2yddhi {
  d: path("M13 9h5.75v6H13zM9.75 9v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="w8m5b0y_s"/><path class="wqv2yddhi"/></g>`,
		"fallback": "iconoven:taillight-sharp",
	});
}

export default Component;

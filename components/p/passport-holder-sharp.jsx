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
		"content": `<style>.cq6fu4gqf {
  d: path("M3.25 5.75h15v15.5h-15z");
}

.sx_1wuzea {
  d: path("M6.25 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 6h4.5m7.5-5.75h-4v4h4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y31waybvt {
  d: path("M6.25 5.75v-3h15v15.5h-3");
}
</style><g class="x2cwu0gfd"><path class="y31waybvt"/><path class="cq6fu4gqf"/><path class="sx_1wuzea"/></g>`,
		"fallback": "iconoven:passport-holder-sharp",
	});
}

export default Component;

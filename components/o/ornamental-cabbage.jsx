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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lfrqapboi {
  d: path("M10.5 12.5a1.5 1.5 0 0 1 3 0a3 3 0 0 1-6 0a4.5 4.5 0 0 1 9 0");
}

.rdg0z06ow {
  d: path("M12 20a5 5 0 0 1-7.25-5.25A5 5 0 0 1 7.5 6.5a5 5 0 0 1 9 0a5 5 0 0 1 2.75 8.25A5 5 0 0 1 12 20");
}
</style><g class="hntgybcog"><path class="rdg0z06ow"/><path class="lfrqapboi"/></g>`,
		"fallback": "uix:ornamental-cabbage",
	});
}

export default Component;

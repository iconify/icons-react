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
		"content": `<style>.a8xkrxtwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.493 5.156l6.463 9.336a1.75 1.75 0 0 1-.511 2.48l-5.692 3.557a1.75 1.75 0 0 1-1.577.141l-7.207-2.882a1.75 1.75 0 0 1-.822-2.572l6.435-10.01a1.75 1.75 0 0 1 2.911-.05M12 3l1 18");
}
</style><path class="a8xkrxtwo"/>`,
		"fallback": "uix:pyramid",
	});
}

export default Component;

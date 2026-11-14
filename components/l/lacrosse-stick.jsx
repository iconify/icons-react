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
		"content": `<style>.rqn14sbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l7-7m0 0l4.5-10.25q4-1.75 5.75 0t0 5.75Zm3.75-8.5l4.75 4.75M12 9.5l2.5 2.5");
}
</style><path class="rqn14sbaa"/>`,
		"fallback": "uix:lacrosse-stick",
	});
}

export default Component;

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
		"content": `<style>.pbdestbqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 5v12m-8.5-8q2-5 8.5-4q6.5-1 8.5 4M12 15l4.5.5l-1.5 4");
}
</style><path class="pbdestbqt"/>`,
		"fallback": "uix:tai-chi-pose",
	});
}

export default Component;

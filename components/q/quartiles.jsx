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
		"content": `<style>.cqox33bwp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19C7 19 8 5 12 5s5 14 9.5 14m-19 0h19M12 5v14m-3.75-8v8m7.5-8v8");
}
</style><path class="cqox33bwp"/>`,
		"fallback": "uix:quartiles",
	});
}

export default Component;

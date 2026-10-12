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
		"content": `<style>.pclpreb9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.69 3.49L7.43 13.75a3.75 3.75 0 1 0 2.82 2.82L20.51 6.31a2 2 0 0 0-2.82-2.82m-2.12 2.12l1.24 1.24m-3.36.88l1.24 1.24m-3.36.88l1.24 1.24");
}
</style><path class="pclpreb9z"/>`,
		"fallback": "iconoven:thermometer-lab",
	});
}

export default Component;

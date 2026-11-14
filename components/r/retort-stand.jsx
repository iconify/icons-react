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
		"content": `<style>.ea0i1-ere {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 19H15a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 15 21.5H5.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 5.5 19m2.25 0V2.5m0 5h7.5m0-3.5v10.5a2 2 0 0 0 4 0V4");
}
</style><path class="ea0i1-ere"/>`,
		"fallback": "uix:retort-stand",
	});
}

export default Component;

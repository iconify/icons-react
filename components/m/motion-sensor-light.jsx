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
		"content": `<style>.jz5u1obdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 4v4m-5.5 5.5a5.5 5.5 0 0 1 11 0Zm3.5 0a2 2 0 0 0 4 0m5.75-2.25a4.5 4.5 0 0 1 0 6.5m2-8.5a7.5 7.5 0 0 1 0 10.5");
}
</style><path class="jz5u1obdp"/>`,
		"fallback": "uix-sharp:motion-sensor-light",
	});
}

export default Component;

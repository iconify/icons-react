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
		"content": `<style>.k-2-5mb0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M5.75 8h12.5m-9.5 4h10.5m-9.5 4h6M9 20h2.5");
}
</style><path class="k-2-5mb0w"/>`,
		"fallback": "iconoven:tornado-warning",
	});
}

export default Component;

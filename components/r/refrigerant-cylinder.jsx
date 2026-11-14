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
		"content": `<style>.saev_6b9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21.5V11a5 5 0 0 1 10 0v10.5Zm5-19V6M6 2.5h5m8 13v6M16.5 17l5 3m-5 0l5-3");
}
</style><path class="saev_6b9f"/>`,
		"fallback": "uix:refrigerant-cylinder",
	});
}

export default Component;

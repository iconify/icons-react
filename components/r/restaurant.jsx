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
		"content": `<style>.czvplvi9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.75v5a2.75 2.75 0 0 0 5.5 0v-5M8 2.75v18.5M18.75 13V3.25a.5.5 0 0 0-.8-.4C16.1 4.3 15.25 7 15.25 10v2a1 1 0 0 0 1 1Zm0 0v8.25");
}
</style><path class="czvplvi9f"/>`,
		"fallback": "iconoven:restaurant",
	});
}

export default Component;

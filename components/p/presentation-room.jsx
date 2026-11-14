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
		"content": `<style>.eg52orbxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75h16M12 7za3.25 3.25 0 0 1 3.25 3.25v8A3.25 3.25 0 0 1 12 21.5a3.25 3.25 0 0 1-3.25-3.25v-8A3.25 3.25 0 0 1 12 7M4.75 9zA1.25 1.25 0 0 1 6 10.25v.5A1.25 1.25 0 0 1 4.75 12a1.25 1.25 0 0 1-1.25-1.25v-.5A1.25 1.25 0 0 1 4.75 9m0 6zA1.25 1.25 0 0 1 6 16.25v.5A1.25 1.25 0 0 1 4.75 18a1.25 1.25 0 0 1-1.25-1.25v-.5A1.25 1.25 0 0 1 4.75 15m14.5-6za1.25 1.25 0 0 1 1.25 1.25v.5A1.25 1.25 0 0 1 19.25 12A1.25 1.25 0 0 1 18 10.75v-.5A1.25 1.25 0 0 1 19.25 9m0 6za1.25 1.25 0 0 1 1.25 1.25v.5A1.25 1.25 0 0 1 19.25 18A1.25 1.25 0 0 1 18 16.75v-.5A1.25 1.25 0 0 1 19.25 15");
}
</style><path class="eg52orbxl"/>`,
		"fallback": "uix:presentation-room",
	});
}

export default Component;

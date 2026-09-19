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
		"content": `<style>.sz42wtbwb {
  fill: currentColor;
  d: path("M18 5V4c0-1.1-.9-2-2-2H8c-.86 0-1.58.54-1.87 1.3L7.83 5zm-2 6l2-3V7H9.83L16 13.17zM2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9V20c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1.17l3.07 3.07a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0");
}
</style><path class="sz42wtbwb"/>`,
		"fallback": "ic:round-flashlight-off",
	});
}

export default Component;

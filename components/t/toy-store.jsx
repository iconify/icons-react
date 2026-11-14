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
		"content": `<style>.v-8w2jbtx {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m2.311 6.205l19.439.274v.022q-.002 2.997-3 2.997q-1.499 0-2.249-.749q-.75.751-2.251.751T12 8.75q-.75.75-2.25.75t-2.251-.751q-.75.75-2.249.75q-2.999 0-3-2.999q0-.154.061-.295M8 12q0-2.25 2.25-2.25h3.5Q16 9.75 16 12v2q0 .4-.121.75H17.5q2.25 0 2.25 2.25v3q0 2.25-2.25 2.25H14q-1.5 0-2-1q-.5 1-2 1H6.5q-2.25 0-2.25-2.25v-3q0-2.25 2.25-2.25h1.621Q8 14.4 8 14z");
}
</style><path class="v-8w2jbtx"/>`,
		"fallback": "uix-solid:toy-store",
	});
}

export default Component;

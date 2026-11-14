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
		"content": `<style>.rl6_-6k4x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 9.5q-2.5 0-2.5 2.5T5 14.5T7.5 12T5 9.5M9.5 12q0-2.5 2.5-2.5q1.036 0 1.768.732T14.5 12t-.732 1.768T12 14.5q-2.5 0-2.5-2.5m7 0q0-2.5 2.5-2.5t2.5 2.5t-2.5 2.5t-2.5-2.5");
}
</style><path class="rl6_-6k4x"/>`,
		"fallback": "uix-solid:loading-dots",
	});
}

export default Component;

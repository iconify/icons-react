import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qea8y5dby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 14.81C-.49 26.4 22.37 39.47 24 39.47c1.79 0 24.48-13.07 18.5-24.66c-2.63-4.46-9.5-11.56-18.5 0c-5.38-7.81-13.73-8.42-18.5 0");
}
</style><path class="qea8y5dby"/>`,
		"fallback": "arcticons:simplethankyou",
	});
}

export default Component;

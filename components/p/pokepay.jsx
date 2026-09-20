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
		"content": `<style>.rzzl_9b9b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.942v8.43a17.685 17.685 0 0 0 26.53 15.316a17.68 17.68 0 0 0 8.842-15.316H43.5l-5.895-5.895l-5.896 5.895h3.628c0 4.706-2.5 9.036-6.575 11.39a13.13 13.13 0 0 1-13.151 0a13.13 13.13 0 0 1-6.576-11.39v-4.895a1 1 0 0 1 1-1s21.674 0 21.674 0l4.535-4.535H6.5a2 2 0 0 0-2 2");
}
</style><path class="rzzl_9b9b"/>`,
		"fallback": "arcticons:pokepay",
	});
}

export default Component;

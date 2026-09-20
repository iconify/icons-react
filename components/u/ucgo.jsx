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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.yyxmvzb1u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-miterlimit: 11.339;
  d: path("M10.622 9.501v8.484a4.203 4.203 0 0 0 8.405 0V9.501m12.233 8.431v.052a4.203 4.203 0 0 1-8.404 0v-4.281a4.203 4.203 0 0 1 8.405 0v.052m-6.117 16.26a4.203 4.203 0 0 0-8.405 0v4.282a4.203 4.203 0 0 0 8.405 0h-4.202M33.175 38.5a4.203 4.203 0 0 1-4.202-4.202v-4.282a4.203 4.203 0 0 1 8.405 0v4.282a4.203 4.203 0 0 1-4.203 4.202Z");
}
</style><path class="yyxmvzb1u"/><path class="i9clfwm2k"/>`,
		"fallback": "arcticons:ucgo",
	});
}

export default Component;

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
		"content": `<style>.i0euktb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.501 11.202h4.61v4.61h-4.61zM5.5 19.275h4.61v4.61H5.5zm0 7.97h4.61v4.61H5.5zm8.366-20.341h4.61v4.61h-4.61zm-.001 8.073h4.61v4.61h-4.61zm0 7.97h4.61v4.61h-4.61zm.009 8.064h4.61v4.61h-4.61zm8.046-18.632h4.61v4.61h-4.61zm0 8.073h4.61v4.61h-4.61zm-.001 7.97h4.61v4.61h-4.61zm.01 8.064h4.61v4.61h-4.61zm7.939-29.381h4.61v4.61h-4.61zm-.001 8.073h4.61v4.61h-4.61zm0 7.97h4.61v4.61h-4.61zm.01 8.065h4.61v4.61h-4.61zm8.013-20.246h4.61v4.61h-4.61zm-.001 8.074h4.61v4.61h-4.61zm0 7.969h4.61v4.61h-4.61z");
}
</style><path class="i0euktb3x"/>`,
		"fallback": "arcticons:vvave",
	});
}

export default Component;

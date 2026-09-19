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
		"content": `<style>.ycbfogk-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.946 13.579A10.62 10.62 0 0 0 18.36 6.01c-4.066-1.088-8.49.427-11.073 3.751a10.54 10.54 0 0 0-2.235 6.048c-.642 8.112 4.826 19.527 7.493 24.549a3.72 3.72 0 0 0 4.232 1.857c5.502-1.437 17.603-5.142 23.14-11.107a10.6 10.6 0 0 0 2.183-3.2c2.362-5.381-.086-11.66-5.468-14.02a10.6 10.6 0 0 0-9.21.328a1.02 1.02 0 0 1-1.476-.639Z");
}
</style><path class="ycbfogk-q"/>`,
		"fallback": "arcticons:pocketlove",
	});
}

export default Component;

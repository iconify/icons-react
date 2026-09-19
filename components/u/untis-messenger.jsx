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
		"content": `<style>.f4z8_rbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.382 34.75a21.499 21.499 0 1 1 7.87 7.868m-7.87-7.868L3.6 44.21l9.651-1.592M23.86 2.64v7.327m-.048 3.579V24.02m-5.782 3.428l5.782-3.427M34.543 5.512l-3.664 6.345m11.479 1.483l-6.346 3.664m9.2 7.022h-7.327m4.455 10.682l-6.346-3.664m-1.482 11.478l-3.663-6.345m-7.024 9.199V38.05m-10.682 4.454l3.664-6.345M5.328 34.676l6.346-3.664M2.982 23.99h6.82M5.346 13.309l6.346 3.663m1.482-11.478l3.664 6.345");
}
</style><path class="f4z8_rbvo"/>`,
		"fallback": "arcticons:untis-messenger",
	});
}

export default Component;

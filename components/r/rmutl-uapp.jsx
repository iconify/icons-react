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
		"content": `<style>.ub32x40xk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.495 37.433c7.214-.679 14.463-1.272 22.29-.416M22.26 20.932l4.877 8.745c2.992 5.364 10.044 7.195 16.364 7.19M25.48 16.131L15.925 29.77c-2.44 3.483-5.983 6.069-11.424 7.02m2.445-26.222c4.463 3.186 11.237 2.869 18.544 2.615c8.975-.313 13.803 2.601 14.446 5.882c1.211 6.183-12.098 8.343-24.7 6.053c-6.355-1.154-4.241-4.991 3.59-2.739");
}
</style><path class="ub32x40xk"/>`,
		"fallback": "arcticons:rmutl-uapp",
	});
}

export default Component;

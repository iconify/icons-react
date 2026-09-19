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
		"content": `<style>.i4ke-4tik {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.014a6.72 6.72 0 0 1-6.722 6.722V7.014zM23.909 17.732l-5.934 14.993l-5.935-14.993H5.5l9.204 23.254h6.541l9.204-23.254z");
}
</style><path class="i4ke-4tik"/>`,
		"fallback": "arcticons:vibbo",
	});
}

export default Component;

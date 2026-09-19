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
		"content": `<style>.kkfailbss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.17 17.248c12.662 11.423-4.982 22.835-20.345 20.345C30.868 35.102 39.38 24.93 39.169 17.248m-13.282-4.771c2.7 11.213-5.402 20.135-13.493 22.625C-4 28.25 7.413 10.408 25.887 12.477");
}

.ydq8uobqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.428 8.747c-.2 15.353-5.39 26.565-27.595 30.506C29.617 31.57 31.277 20.569 31.698 8.747z");
}
</style><path class="kkfailbss"/><path class="ydq8uobqk"/>`,
		"fallback": "arcticons:jmo",
	});
}

export default Component;

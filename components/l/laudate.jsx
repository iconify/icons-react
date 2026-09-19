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
		"content": `<style>.r8cv9cctc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.057 15.656Q43.19 9.847 23.954 4.5l.103 38.702m-5.255.298h10.396M11.79 39.305l24.348-21.387m-23.844 0l23.844 21.387M13.046 29.54H9.368m-.911 1.821l2.75-5.499l2.75 5.499m20.086 0h1.836v-.155a2.751 2.751 0 1 1 1.828 0v.156h1.836");
}
</style><path class="r8cv9cctc"/>`,
		"fallback": "arcticons:laudate",
	});
}

export default Component;

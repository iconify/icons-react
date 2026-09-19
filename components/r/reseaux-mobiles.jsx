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
		"content": `<style>.btloivscl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 19.148c6.368-5.698 11.433-7.728 21.487-7.527m6.985 1.703c4.558 1.676 6.053 2.85 8.528 5.757m-29.694 7.507c3.754-3.217 5.63-4.053 9.651-4.388m9.6 1.585c2.064.44 3.874 2.19 4.29 3.016m-16.168 6.557c-1.91 4.424 6.033 6.837 7.239 1.743l4.558-24.4c.036-.58-1.245-.935-1.542-.401z");
}
</style><path class="btloivscl"/>`,
		"fallback": "arcticons:reseaux-mobiles",
	});
}

export default Component;

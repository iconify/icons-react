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
		"content": `<style>.cyp_0jb3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.446 31.565L37.853 19.54L42.5 29.737L16.093 41.762zM5.5 18.263L31.896 6.238l4.646 10.197L10.147 28.46zm25.041 1.156h7.004M10.29 28.504l6.607.407m14.945-1.753h6.189m-3.094-3.1v6.2");
}
</style><path class="cyp_0jb3m"/>`,
		"fallback": "arcticons:skit",
	});
}

export default Component;

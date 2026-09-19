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
		"content": `<style>.yaa0mvn2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.04 17.003A9.75 9.75 0 1 0 24 24m2.96 6.997A9.75 9.75 0 1 0 24 24m0 0h-9.75");
}
</style><path class="yaa0mvn2y"/>`,
		"fallback": "arcticons:toya-go",
	});
}

export default Component;

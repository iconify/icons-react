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
		"content": `<style>.foed91b-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.131 42.5H6.321V5.552l13.81 21.466zm7.738-.052h13.81V5.5L27.87 26.966z");
}
</style><path class="foed91b-y"/>`,
		"fallback": "arcticons:myprotein",
	});
}

export default Component;

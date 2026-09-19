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
		"content": `<style>.p3joakb4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.769 5.5H37.11L19.63 24.76l17.6 17.74H10.77z");
}
</style><path class="p3joakb4q"/>`,
		"fallback": "arcticons:knowunity",
	});
}

export default Component;

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
		"content": `<style>.mlll53bln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m40.97 5.5l-17.918 37h-3.799L11.85 10.203c-.395-1.32-1.402-2.81-4.819-4.703h9.415l8.451 33.192");
}
</style><path class="mlll53bln"/>`,
		"fallback": "arcticons:vline",
	});
}

export default Component;

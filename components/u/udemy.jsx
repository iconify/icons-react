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
		"content": `<style>.tb1s_sbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.858 15.824v18.335A9.305 9.305 0 0 0 24 43.5a9.305 9.305 0 0 0 9.142-9.34V15.823m-18.273-5.607L24 4.5l9.131 5.716");
}
</style><path class="tb1s_sbgm"/>`,
		"fallback": "arcticons:udemy",
	});
}

export default Component;

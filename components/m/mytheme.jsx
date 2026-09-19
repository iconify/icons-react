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
		"content": `<style>.nmyupdz9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.25 24A9.25 9.25 0 1 0 24 14.75v18.5A9.25 9.25 0 1 1 14.75 24z");
}

.xa8seibsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 24A9.25 9.25 0 1 1 24 14.75v18.5A9.25 9.25 0 1 0 33.25 24z");
}
</style><path class="nmyupdz9y"/><path class="xa8seibsi"/>`,
		"fallback": "arcticons:mytheme",
	});
}

export default Component;

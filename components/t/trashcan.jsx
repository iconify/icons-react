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
		"content": `<style>.e5_9ysb7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.945 7.624L28.84 4.5h-9.68l-3.105 3.124H8.872v4.647h30.256V7.624zm-19.9 4.647h23.95v28.124A3.106 3.106 0 0 1 32.89 43.5H15.15a3.106 3.106 0 0 1-3.105-3.105zM24 17.886v20m6-20v20m-12-20v20");
}
</style><path class="e5_9ysb7u"/>`,
		"fallback": "arcticons:trashcan",
	});
}

export default Component;

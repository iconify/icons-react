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
		"content": `<style>.iy2zvecgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.5A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1 0-18.5Zm18.5 0A9.25 9.25 0 0 0 24 24ZM24 24a9.25 9.25 0 0 1-18.5 0Z");
}
</style><path class="iy2zvecgi"/>`,
		"fallback": "arcticons:mono",
	});
}

export default Component;

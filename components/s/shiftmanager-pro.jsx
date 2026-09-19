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
		"content": `<style>.liepqlbbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.987 23.83l9.25-16.022h6.013L42.5 23.83l-9.25 16.021h-4");
}

.u311mcboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.256 13.015L20.763 39.851H14.75L5.5 23.83l9.25-16.022h4");
}
</style><path class="u311mcboc"/><path class="liepqlbbx"/>`,
		"fallback": "arcticons:shiftmanager-pro",
	});
}

export default Component;

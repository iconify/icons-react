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
		"content": `<style>.cg4a_1_0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.722 38.296a2.78 2.78 0 0 0 2.778 2.778h-16a2.78 2.78 0 0 0 2.778-2.778V9.704A2.78 2.78 0 0 0 5.5 6.926h16a2.78 2.78 0 0 0-2.778 2.778zm21 0a2.78 2.78 0 0 0 2.778 2.778h-16a2.78 2.78 0 0 0 2.778-2.778V9.704A2.78 2.78 0 0 0 26.5 6.926h16a2.78 2.78 0 0 0-2.778 2.778zM18.722 24h10.556");
}
</style><path class="cg4a_1_0d"/>`,
		"fallback": "arcticons:lhumanite",
	});
}

export default Component;

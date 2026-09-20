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
		"content": `<style>.bf8acbclq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.47 26.5H42.5v16H26.47zm-20.97 0h16v16a16 16 0 0 1-16-16m0-21h16a16 16 0 0 1-16 16zm20.97 0za16 16 0 0 1 16 16h-16z");
}
</style><path class="bf8acbclq"/>`,
		"fallback": "arcticons:skydroid",
	});
}

export default Component;

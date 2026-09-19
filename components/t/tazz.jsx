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
		"content": `<style>.x3r2vkvgr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.1 8.602L5.5 29.132h16.4v10.266l20.6-20.53H26.1z");
}
</style><path class="x3r2vkvgr"/>`,
		"fallback": "arcticons:tazz",
	});
}

export default Component;

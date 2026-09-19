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
		"content": `<style>.e2oz3xb-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.125 4.5h9.75v29.25h-9.75z");
}

.hh_vnewap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 14.25h29.25V24H9.375zm0 19.5h9.75v9.75h-9.75zm19.5 0h9.75v9.75h-9.75z");
}
</style><path class="e2oz3xb-u"/><path class="hh_vnewap"/>`,
		"fallback": "arcticons:simple-brick-games",
	});
}

export default Component;

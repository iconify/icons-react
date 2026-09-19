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
		"content": `<style>.l3vagbb4b {
  cx: 28.593px;
  cy: 19.183px;
  r: 13.052px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nc5br2wvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.645 23.746c1.859 9.807 9.578 17.526 19.385 19.384");
}
</style><circle class="l3vagbb4b"/><path class="nc5br2wvf"/>`,
		"fallback": "arcticons:onetouch",
	});
}

export default Component;

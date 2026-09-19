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
		"content": `<style>.ybuwyomsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.4 24v17.267h11.1V21.533q0-14.8-14.8-14.8H5.5v34.534h11.1V17.833h8.633q6.167 0 6.167 6.167");
}
</style><path class="ybuwyomsv"/>`,
		"fallback": "arcticons:nate",
	});
}

export default Component;

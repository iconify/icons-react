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
		"content": `<style>.l7f2occgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.764 21.362a8.118 8.118 0 1 1 16.236 0v13.395M7.764 13.243v21.514M24 21.362a8.118 8.118 0 1 1 16.236 0v13.395m-35.736 0h6.527M4.5 13.451l3.264-.208m12.972 21.514h6.528m9.709 0H43.5");
}
</style><path class="l7f2occgz"/>`,
		"fallback": "arcticons:mobility-schweiz",
	});
}

export default Component;

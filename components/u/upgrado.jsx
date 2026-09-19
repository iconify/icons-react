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
		"content": `<style>.r19scibji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.313 21.744l29.325.023l-1.989 4.091l-29.385.093zM6.547 30.82l29.327.022l-1.99 4.091l-29.384.093zm7.628-17.846l29.325.023l-1.988 4.09l-29.387.093z");
}
</style><path class="r19scibji"/>`,
		"fallback": "arcticons:upgrado",
	});
}

export default Component;

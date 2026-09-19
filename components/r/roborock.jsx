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
		"content": `<style>.tj4tvhboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.81 8.29h27.256L4.5 39.71h39L28.864 26.082");
}
</style><path class="tj4tvhboh"/>`,
		"fallback": "arcticons:roborock",
	});
}

export default Component;

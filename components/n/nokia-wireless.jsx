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
		"content": `<style>.hncob1bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 11c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13zm-13 0c7.18 0 13 5.82 13 13s-5.82 13-13 13z");
}
</style><path class="hncob1bwz"/>`,
		"fallback": "arcticons:nokia-wireless",
	});
}

export default Component;

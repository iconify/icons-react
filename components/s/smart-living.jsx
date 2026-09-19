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
		"content": `<style>.s2yetn1-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.02 26.218l-3.325 2.747V43.5l5.414-4.54h8.986V15.244L24 4.5L7.905 15.244V38.96h10.97");
}
</style><path class="s2yetn1-v"/>`,
		"fallback": "arcticons:smart-living",
	});
}

export default Component;

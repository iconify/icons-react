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
		"content": `<style>.v7e61ybyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.128 4.5h7.57a13.101 13.101 0 0 1 0 26.202h-7.57m7.569 0L29.467 43.5m-12.77-39h22.176M9.127 17.601h29.746");
}
</style><path class="v7e61ybyt"/>`,
		"fallback": "arcticons:monito",
	});
}

export default Component;

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
		"content": `<style>.joyxvxnil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.81 23.752a5.458 5.458 0 1 0 0-10.916V8.668a9.626 9.626 0 0 1 0 19.252v4.168a13.794 13.794 0 0 0 0-27.588h-5.395v39h-5.01v-39H9.397v39");
}
</style><path class="joyxvxnil"/>`,
		"fallback": "arcticons:powerschool",
	});
}

export default Component;

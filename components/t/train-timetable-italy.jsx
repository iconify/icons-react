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
		"content": `<style>.ezjayna1t {
  cx: 32.25px;
  cy: 30px;
  r: 0.75px;
  fill: currentColor;
}

.t_0voh9kr {
  cx: 15.75px;
  cy: 30px;
  r: 0.75px;
  fill: currentColor;
}

.yq9ggub6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.25 22.5h31.5M18 37.5l-4.5 6m16.5-6l4.5 6m-21.75-39h22.5a4.5 4.5 0 0 1 4.5 4.5v24a4.5 4.5 0 0 1-4.5 4.5h-22.5a4.5 4.5 0 0 1-4.5-4.5V9a4.5 4.5 0 0 1 4.5-4.5");
}
</style><path class="yq9ggub6o"/><circle class="t_0voh9kr"/><circle class="ezjayna1t"/>`,
		"fallback": "arcticons:train-timetable-italy",
	});
}

export default Component;

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
		"content": `<style>.m-vycebhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5L6.856 21.309V42.5h12.141V28.77h10.006V42.5h12.141V21.309z");
}
</style><path class="m-vycebhk"/>`,
		"fallback": "arcticons:room-planner",
	});
}

export default Component;

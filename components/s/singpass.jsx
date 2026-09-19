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
		"content": `<style>.c8wr58czu {
  cx: 24px;
  cy: 11.167px;
  r: 6.667px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.j2ngk5bzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.402 43.5H17.598l2.264-23.265h8.276z");
}
</style><circle class="c8wr58czu"/><path class="j2ngk5bzu"/>`,
		"fallback": "arcticons:singpass",
	});
}

export default Component;

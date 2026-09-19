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
		"content": `<style>.b4c-4tb4i {
  cx: 16.227px;
  cy: 38.027px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.433px;
  ry: 5.414px;
}

.tvtg0uztd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.621 43.5V16.89c0-7.758 6.855-12.266 11.551-12.39l.034 26.813c.012 9.423-8.289 12.18-11.585 12.187");
}
</style><ellipse class="b4c-4tb4i"/><path class="tvtg0uztd"/>`,
		"fallback": "arcticons:joom",
	});
}

export default Component;

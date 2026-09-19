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
		"content": `<style>.cn617ac3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.23 4.5h7.54c8.328 0 15.08 8.73 15.08 19.5s-6.752 19.5-15.08 19.5h-7.54");
}

.xmmx7ub-e {
  cx: 20.23px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 15.08px;
  ry: 19.5px;
}
</style><ellipse class="xmmx7ub-e"/><path class="cn617ac3i"/>`,
		"fallback": "arcticons:luck-be-a-landlord",
	});
}

export default Component;

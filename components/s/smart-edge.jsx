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
		"content": `<style>.wkxw5hbfm {
  cx: 24px;
  cy: 24px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.y5viebclj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.5 24a7.12 7.12 0 0 1-2.306 5.264H5.806C4.384 27.958 3.5 26.084 3.5 24s.884-3.958 2.306-5.264h36.388A7.12 7.12 0 0 1 44.5 24");
}
</style><circle class="wkxw5hbfm"/><path class="y5viebclj"/>`,
		"fallback": "arcticons:smart-edge",
	});
}

export default Component;

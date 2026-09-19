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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.wttsybcor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.354 18.267c-2.926 2.18-7.051 3.732-12.354-1.218s-9.427-3.398-12.354-1.218m24.708 9.387C33.428 27.398 29.303 28.949 24 24s-9.427-3.398-12.354-1.218m24.708 9.387C33.428 34.349 29.303 35.9 24 30.95s-9.427-3.398-12.354-1.218");
}
</style><rect class="j3s9ivbxi"/><path class="wttsybcor"/>`,
		"fallback": "arcticons:provo-water",
	});
}

export default Component;

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

.lyovzdb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.3 16v16h-5.238C21.1 32 18.7 29.594 18.7 26.627s2.4-5.374 5.362-5.374H29.3m-5.238 0l-5.238-5.249");
}
</style><rect class="j3s9ivbxi"/><path class="lyovzdb6j"/>`,
		"fallback": "arcticons:rebtel",
	});
}

export default Component;

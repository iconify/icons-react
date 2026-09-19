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
		"content": `<style>.igk-x5o9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.557 16.412v10.149a5.027 5.027 0 1 0 10.053 0V16.412m11.168 10.149h-6.723m-1.665 5.027l5.026-15.176l5.027 15.176M21.11 16.412h3m-13.053 0h3m9.833 15.176h3m7.053 0h3");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="igk-x5o9h"/>`,
		"fallback": "arcticons:uapp",
	});
}

export default Component;

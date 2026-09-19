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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zgbz25bdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.1 30.65c1.105.926 2.176 1.35 4.854 1.35h.46a4.485 4.485 0 0 0 4.486-4.485h0a4.486 4.486 0 0 0-4.486-4.486H19.1V16h9.8");
}
</style><circle class="cpk0fnbgt"/><path class="zgbz25bdk"/>`,
		"fallback": "arcticons:number-circle-5",
	});
}

export default Component;

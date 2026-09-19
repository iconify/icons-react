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
		"content": `<style>.jiev3wbwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 37.625c-6.345 0-11.49-5.144-11.49-11.489V8.375M31.011 23H42.5M11.572 37.625h7.422a5.03 5.03 0 0 0 0-10.06H10.53a5.03 5.03 0 0 1 0-10.061h13.097");
}

.uvnwtfbwo {
  cx: 7.767px;
  cy: 35.359px;
  r: 2.267px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="jiev3wbwx"/><circle class="uvnwtfbwo"/>`,
		"fallback": "arcticons:smart-traveller",
	});
}

export default Component;

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

.mz5kzdbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 33.413c1.923-4.698 5.916-13.845 5.916-13.845l6.166 14.015l8.39-19.456L38.5 33.874");
}
</style><circle class="cpk0fnbgt"/><path class="mz5kzdbeo"/>`,
		"fallback": "arcticons:moneyview",
	});
}

export default Component;

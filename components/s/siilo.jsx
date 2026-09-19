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

.ijuej06ch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.812 32.73a7.07 7.07 0 0 0 5.837 2.534h3.502a5.635 5.635 0 1 0 0-11.264h-3.794a5.754 5.754 0 0 1-5.837-5.632a5.754 5.754 0 0 1 5.837-5.632h3.503c2.627 0 4.378.564 5.837 2.535");
}

.z1qn5cbew {
  cx: 35.235px;
  cy: 33.018px;
  r: 2.246px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="ijuej06ch"/><circle class="z1qn5cbew"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:siilo",
	});
}

export default Component;

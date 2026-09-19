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
		"content": `<style>.gpj4f9btb {
  cx: 20.598px;
  cy: 19.108px;
  r: 4.785px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vbw0aabdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.157 19.108a12.44 12.44 0 1 1 24.88 0c0 3.73-1.394 7.393-4.24 9.356C21.121 33.757 21.66 42.5 14.642 42.5c-6.495 0-6.486-5.848-6.486-5.848m26.571-4.477A19.245 19.245 0 0 0 34.206 5.5");
}
</style><circle class="gpj4f9btb"/><path class="vbw0aabdx"/>`,
		"fallback": "arcticons:sound-amplifier",
	});
}

export default Component;

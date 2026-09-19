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

.f2d9kuwvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.392 31.678v1.214H26.79v-1.475a8.392 8.392 0 1 0-5.58 0v1.475h-5.602v-1.215");
}
</style><path class="f2d9kuwvc"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:sse",
	});
}

export default Component;

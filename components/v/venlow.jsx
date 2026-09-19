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

.picoznb8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23 34.45l-9.473-16.407a1.155 1.155 0 0 1 1-1.732h18.945a1.155 1.155 0 0 1 1 1.732L25 34.45a1.155 1.155 0 0 1-2 0");
}
</style><path class="picoznb8p"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:venlow",
	});
}

export default Component;

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
		"content": `<style>.a0tv3xb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.1 11.3L24 19.4l-7.1-8.1l-8.7 18.2l5.6 4.7l4.7-13.4l5.5 6.4l5.5-6.4l4.7 13.4l5.6-4.7z");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="a0tv3xb7k"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:super-mario-run",
	});
}

export default Component;

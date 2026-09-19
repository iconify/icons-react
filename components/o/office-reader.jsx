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
		"content": `<style>.b4hzekukw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947");
}

.ccnsmqbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.029 16.259L24.52 4.367L4.378 16.26l20.144 11.89Zm-33.306 3.763l-6.768 4.17l20.566 11.775L44.03 24.192l-6.465-3.947M11.012 28.08l-6.767 4.17L24.81 44.026L44.319 32.25l-6.465-3.947");
}
</style><path class="b4hzekukw"/><path class="ccnsmqbtl"/>`,
		"fallback": "arcticons:office-reader",
	});
}

export default Component;

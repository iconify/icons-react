import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qpnvrpbqn {
  fill: currentColor;
  d: path("M5 7.5A2.5 2.5 0 0 1 7.5 5H9v4.5a2.5 2.5 0 0 0 2.5 2.5h8A2.5 2.5 0 0 0 22 9.5V5.04a2.5 2.5 0 0 1 1.318.692l2.95 2.95A2.5 2.5 0 0 1 27 10.45V24.5a2.5 2.5 0 0 1-2 2.45V18.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 7 18.5v8.45a2.5 2.5 0 0 1-2-2.45zM9 27v-8.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V27zM20 5v4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V5zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5V10.45a4.5 4.5 0 0 0-1.318-3.182l-2.95-2.95A4.5 4.5 0 0 0 21.55 3z");
}
</style><path class="qpnvrpbqn"/>`,
		"fallback": "fluent:save-32-regular",
	});
}

export default Component;

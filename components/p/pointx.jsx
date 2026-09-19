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
		"content": `<style>.vmb-bb8-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.478 18.69a3.49 3.49 0 0 0 0-4.933a3.485 3.485 0 0 0-4.929-.002l-.002.002l-7.67 7.675a3.49 3.49 0 0 0 0 4.934l7.67 7.676a3.485 3.485 0 0 0 4.93.002l.001-.002a3.49 3.49 0 0 0 0-4.934l-5.205-5.21zM6.093 32.124a5.443 5.443 0 0 0 0 7.694a5.435 5.435 0 0 0 7.686.003l.003-.003l11.962-11.97a5.444 5.444 0 0 0 0-7.694L13.782 8.183a5.435 5.435 0 0 0-7.686-.004l-.003.004a5.443 5.443 0 0 0 0 7.694l3.62 3.623a6.366 6.366 0 0 1 .001 8.998z");
}
</style><path class="vmb-bb8-n"/>`,
		"fallback": "arcticons:pointx",
	});
}

export default Component;

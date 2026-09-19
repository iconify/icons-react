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
		"content": `<style>.t_q0h8e1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.59 8.803h7.334v25.97a3.67 3.67 0 0 1-3.667 3.667h0a3.67 3.67 0 0 1-3.667-3.667zm37 9.43H32.3l-8.364 9.409v-9.41h-7.335v16.54a3.667 3.667 0 0 0 3.668 3.668a3.65 3.65 0 0 0 2.663-1.158l.004.003z");
}
</style><path class="t_q0h8e1i"/>`,
		"fallback": "arcticons:wavlake",
	});
}

export default Component;

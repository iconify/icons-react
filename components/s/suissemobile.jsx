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
		"content": `<style>.d2rj45lla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 5.055h10.293V16.75l10.943-3.488l3.264 9.917l-10.89 3.557l6.942 9.61l-8.412 6.6l-6.977-9.78l-7.215 9.78l-7.934-6.6l6.84-9.61L4.5 23.18l3.386-9.917L19 16.75Z");
}
</style><path class="d2rj45lla"/>`,
		"fallback": "arcticons:suissemobile",
	});
}

export default Component;

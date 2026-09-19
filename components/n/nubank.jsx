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
		"content": `<style>.p_vmu9put {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.55 33.49H4.5V17.11a2.6 2.6 0 0 1 2.6-2.6h10.36v19h4.85V15.25a5.2 5.2 0 0 0-5.19-5.19h-4a2.59 2.59 0 0 0-2.6 2.6Zm26.9-18.98h6v16.38a2.6 2.6 0 0 1-2.6 2.6H30.54v-19h-4.85v18.26a5.2 5.2 0 0 0 5.19 5.19h4a2.59 2.59 0 0 0 2.6-2.6Z");
}
</style><path class="p_vmu9put"/>`,
		"fallback": "arcticons:nubank",
	});
}

export default Component;

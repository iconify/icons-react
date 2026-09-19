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
		"content": `<style>.cm-5v4buj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.11 31.83v-13.6l9.89-.06a3.5 3.5 0 0 1 3.53 3.5v10.08m-6.73-9.17v9.25");
}

.m869he2fd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.14 3.15a2.4 2.4 0 0 1 1.91.66a2.81 2.81 0 0 1-.33 4l-7 7a2.8 2.8 0 0 1-3.95.32a2.81 2.81 0 0 1 .32-3.94l7-7a3.32 3.32 0 0 1 2-1ZM2.5 24A21.5 21.5 0 1 0 24 2.5m9.89 15.67v13.66");
}
</style><path class="m869he2fd"/><path class="cm-5v4buj"/>`,
		"fallback": "arcticons:mifit",
	});
}

export default Component;

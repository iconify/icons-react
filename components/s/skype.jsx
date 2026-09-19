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
		"content": `<style>.a7bdte81h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.43 6.81A9.75 9.75 0 0 0 6.62 20.16m20.95 21.03a9.75 9.75 0 0 0 13.62-13.62");
}

.vz8xysb0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.71 30.64a4.76 4.76 0 0 0 4.16 1.86h2.52a4.24 4.24 0 0 0 4.24-4.25h0A4.24 4.24 0 0 0 25.39 24h-2.78a4.24 4.24 0 0 1-4.24-4.25h0a4.24 4.24 0 0 1 4.24-4.25h2.52a4.76 4.76 0 0 1 4.16 1.86");
}

.w-swwn8cw {
  cx: 24px;
  cy: 24px;
  r: 17.55px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="vz8xysb0a"/><circle class="w-swwn8cw"/><path class="a7bdte81h"/>`,
		"fallback": "arcticons:skype",
	});
}

export default Component;

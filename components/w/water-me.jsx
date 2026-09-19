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
		"content": `<style>.mw7czacfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.619L4.5 24.964h5.85V40.38h27.3V24.964h5.85Z");
}

.t53l0ccyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.901 28.818a3.9 3.9 0 0 1-7.8 0c0-2.12 3.9-7.71 3.9-7.71s3.9 5.59 3.9 7.71");
}
</style><path class="mw7czacfv"/><path class="t53l0ccyb"/>`,
		"fallback": "arcticons:water-me",
	});
}

export default Component;

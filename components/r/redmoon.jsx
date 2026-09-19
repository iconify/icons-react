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
		"content": `<style>.d-2kn3tex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.51 21.51 0 0 0 2.5 24a22 22 0 0 0 .65 5.17l5.6-5.34l-1.08-5.73l6.6 1.73l5.83-3l3.35.86l12-5.08l-.54 5.95l-7 6.16l5.73-1.62L35 26l-12.3 9.72l-1 6L19.25 45A21.49 21.49 0 1 0 24 2.5");
}
</style><path class="d-2kn3tex"/>`,
		"fallback": "arcticons:redmoon",
	});
}

export default Component;

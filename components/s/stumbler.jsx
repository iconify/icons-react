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
		"content": `<style>.j6k50buap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.19 12C9.87 7.35 16.65 4.5 24 4.5S38.13 7.35 41.81 12m-27.92 7c2.11-2.48 5.9-4 10.05-4s8 1.5 10.05 3.95m-10.05 4.51a7.38 7.38 0 0 0-6.06 11.6l6.06 8.44l6-8.44h0a7.38 7.38 0 0 0-6-11.6m0 4.92a2.46 2.46 0 0 1 2.46 2.46h0a2.46 2.46 0 0 1-2.46 2.46h0a2.47 2.47 0 0 1-2.47-2.46h0a2.47 2.47 0 0 1 2.47-2.46");
}
</style><path class="j6k50buap"/>`,
		"fallback": "arcticons:stumbler",
	});
}

export default Component;

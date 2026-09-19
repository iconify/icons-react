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
		"content": `<style>.ij6uvwb5r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.58 6.2a1 1 0 0 0-1.31 0C7.94 11.68 4.53 17.76 4.5 24h0c0 6.22 3.41 12.33 9.77 17.83a1 1 0 0 0 1.31 0c6.36-5.5 9.78-11.61 9.78-17.83s-3.44-12.32-9.78-17.8");
}

.u2ko6lb6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.93 42.05h26.58a2 2 0 0 0 2-2V27.53a2 2 0 0 0-2-2H25.28");
}
</style><path class="ij6uvwb5r"/><path class="u2ko6lb6k"/>`,
		"fallback": "arcticons:snapseed",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u04jfc_xn {
  fill: currentColor;
  d: path("M244 128a12 12 0 0 1-12 12h-24.58l-36.69 73.37A12 12 0 0 1 160 220h-.6a12 12 0 0 1-10.61-7.72L95 71.15L66.92 133A12 12 0 0 1 56 140H24a12 12 0 0 1 0-24h24.27l36.81-81a12 12 0 0 1 22.13.7l54.28 142.46l27.78-55.56A12 12 0 0 1 200 116h32a12 12 0 0 1 12 12");
}
</style><path class="u04jfc_xn"/>`,
		"fallback": "ph:pulse-bold",
	});
}

export default Component;

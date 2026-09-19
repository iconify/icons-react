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
		"content": `<style>.g01ayn8rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.49 43.5h19a9 9 0 0 0 9-9h0a9.05 9.05 0 0 0-4.3-7.7L24 18.59v10.82H13.72a7.19 7.19 0 0 0-7.1 5.43a7.07 7.07 0 0 0 6.87 8.66");
}

.us3q--btq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.51 4.5h-19a9 9 0 0 0-9 9h0a9.05 9.05 0 0 0 4.3 7.7L24 29.41V18.59h10.28a7.19 7.19 0 0 0 7.1-5.43a7.07 7.07 0 0 0-6.87-8.66");
}
</style><path class="us3q--btq"/><path class="g01ayn8rv"/>`,
		"fallback": "arcticons:session",
	});
}

export default Component;

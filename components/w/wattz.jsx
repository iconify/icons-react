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
		"content": `<style>.o02v14bot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5h-7.75a2 2 0 0 1-2-2V10.4a2 2 0 0 1 2-2h3.85V4.5h7.8v3.9h3.85a2 2 0 0 1 2 2v31.1a2 2 0 0 1-2 2z");
}

.r6w12sqhk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M26 14.617v9.73h4l-8 13.27v-9.73h-4l8-13.27l-8 13.27h4v9.73l8-13.27h-4v-9.73");
}
</style><path class="o02v14bot"/><path class="r6w12sqhk"/>`,
		"fallback": "arcticons:wattz",
	});
}

export default Component;

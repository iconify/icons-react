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
		"content": `<style>.z6x71ob7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.084 24.785c-2.604-1.529-1.994-5.207-.155-7.022c3.188-3.212 8.526-2.15 11.285 1.015c4 4.598 2.436 11.584-2.233 15.107c-6.174 4.681-15.107 2.627-19.526-3.344c-5.54-7.488-2.937-18.056 4.574-23.287c9.1-6.21 21.723-3.105 27.813 5.696c7.046 10.247 3.5 24.279-6.77 31.05");
}
</style><path class="z6x71ob7i"/>`,
		"fallback": "arcticons:top-breath",
	});
}

export default Component;

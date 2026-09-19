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
		"content": `<style>.vtgli5gtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.8 25.888c4.446-1.169 7.73-5.204 7.73-10.018c0-5.727-4.643-10.37-10.37-10.37H9.038v37h29.925zm7.673-11.136H9.037m23.533 9.252H9.037m24.265 9.244H9.037");
}
</style><path class="vtgli5gtu"/>`,
		"fallback": "arcticons:mradio",
	});
}

export default Component;

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
		"content": `<style>.qs30ngb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.855 41.356h33.937q1.506-.15 1.708-1.602V25.599c-.121-1.75-.245-2.306-1.464-3.553L24.954 5.59c-.677-.482-1.323-.483-2.078.136l-16.1 15.932c-.72.724-1.192 1.433-1.276 2.824v15.32c.006.575.283 1.409 1.355 1.555m2.957-17.352V37.34m5.398-13.335V37.34m5.3-13.335V37.34m4.642 0l4.411-13.335m3.687 0l4.378 13.335");
}
</style><path class="qs30ngb3a"/>`,
		"fallback": "arcticons:music-assistant",
	});
}

export default Component;

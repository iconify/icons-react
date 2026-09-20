import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bzspaxb5g {
  fill: currentColor;
  d: path("M4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm3.692 0v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zM20 12.616h-1V8.308q0-1.378-.965-2.343T15.692 5h-4.307V4h4.307q1.806 0 3.057 1.251T20 8.308z");
}
</style><path class="bzspaxb5g"/>`,
		"fallback": "material-symbols-light:rounded-corner-outline",
	});
}

export default Component;

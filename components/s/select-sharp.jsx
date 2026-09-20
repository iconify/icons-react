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
		"content": `<style>.doe_7s0-s {
  fill: currentColor;
  d: path("M7.692 20v-1.23h1.231V20zM4 5.23V4h1.23v1.23zm3.692 0V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zm3.692 0V4h1.23v1.23zm0 14.77v-1.23h1.23V20zm3.692-14.77V4H20v1.23zM4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zM18.77 20v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23z");
}
</style><path class="doe_7s0-s"/>`,
		"fallback": "material-symbols-light:select-sharp",
	});
}

export default Component;

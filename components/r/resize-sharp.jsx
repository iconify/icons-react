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
		"content": `<style>.eb9tla6mb {
  fill: currentColor;
  d: path("M19 8.923V5h-3.923V4H20v4.923zM4 20v-4.923h1V19h3.923v1zm0-7.384v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zm3.692 0V4h1.231v1.23zM11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23z");
}
</style><path class="eb9tla6mb"/>`,
		"fallback": "material-symbols-light:resize-sharp",
	});
}

export default Component;

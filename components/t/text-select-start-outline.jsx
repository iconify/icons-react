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
		"content": `<style>.d5iq1bbfg {
  fill: currentColor;
  d: path("M11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4H20v1.23zM4 20v-1h2V5H4V4h5v1H7v14h2v1z");
}
</style><path class="d5iq1bbfg"/>`,
		"fallback": "material-symbols-light:text-select-start-outline",
	});
}

export default Component;

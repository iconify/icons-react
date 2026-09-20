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
		"content": `<style>.d1dcf-bga {
  fill: currentColor;
  d: path("M11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-14.77V4H20v1.23zM4 20v-1h2V5H4V4h5v1H7v14h2v1zm12.712-4.711l-.708-.689l2.075-2.1h-7.31v-1h7.31l-2.075-2.1l.707-.688L20 12z");
}
</style><path class="d1dcf-bga"/>`,
		"fallback": "material-symbols-light:text-select-move-forward-character-outline",
	});
}

export default Component;

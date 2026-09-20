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
		"content": `<style>.tpdp5nb1m {
  fill: currentColor;
  d: path("M11.5 16.23h1v-1.384h-1zm0-2.807h1V8.769h-1zM19 21H5V8.423L10.423 3H19zm-1-1V4h-7.15L6 8.85V20zm0 0V4z");
}
</style><path class="tpdp5nb1m"/>`,
		"fallback": "material-symbols-light:sd-card-alert-outline-sharp",
	});
}

export default Component;

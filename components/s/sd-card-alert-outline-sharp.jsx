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
		"content": `<style>.rwkwv0erm {
  fill: currentColor;
  d: path("M11 17h2v-2h-2zm0-4h2V8h-2zm9 9H4V8l6-6h10zm-2-2V4h-7.15L6 8.85V20zm0 0V4z");
}
</style><path class="rwkwv0erm"/>`,
		"fallback": "material-symbols:sd-card-alert-outline-sharp",
	});
}

export default Component;

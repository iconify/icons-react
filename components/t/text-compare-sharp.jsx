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
		"content": `<style>.b4mwk2bsb {
  fill: currentColor;
  d: path("M11 22.23V20H4V4h7V1.77h1v20.46zM14.192 5V4h6v16h-6v-1h5V5zm0 7.5v-1h3.5v1zm0-3.5V8h3.5v1zM7.5 16H11v-1H7.5zm0-3.5H11v-1H7.5zm0-3.5H11V8H7.5z");
}
</style><path class="b4mwk2bsb"/>`,
		"fallback": "material-symbols-light:text-compare-sharp",
	});
}

export default Component;

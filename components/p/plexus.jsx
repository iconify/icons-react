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
		"content": `<style>.lspz5580a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.474 8.508l35.051 30.984m0-30.984L6.474 39.492M43.5 11.082l-39 25.836m39 0l-39-25.836");
}
</style><path class="lspz5580a"/>`,
		"fallback": "arcticons:plexus",
	});
}

export default Component;

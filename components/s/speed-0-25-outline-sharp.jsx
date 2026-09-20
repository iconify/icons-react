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
		"content": `<style>.r-37qzb7a {
  fill: currentColor;
  d: path("M5 16.5v-1h1v1zm9 0v-1h4v-3h-4v-5h5v1h-4v3h4v5zm-6.5 0v-5h4v-3h-4v-1h5v5h-4v3h4v1z");
}
</style><path class="r-37qzb7a"/>`,
		"fallback": "material-symbols-light:speed-0-25-outline-sharp",
	});
}

export default Component;

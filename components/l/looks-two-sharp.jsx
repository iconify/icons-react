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
		"content": `<style>.i99qk9buo {
  fill: currentColor;
  d: path("M9.5 16.5h5v-1h-4v-3h4v-5h-5v1h4v3h-4zM4 20V4h16v16z");
}
</style><path class="i99qk9buo"/>`,
		"fallback": "material-symbols-light:looks-two-sharp",
	});
}

export default Component;

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
		"content": `<style>.zh2t14boi {
  fill: currentColor;
  d: path("M13 16.5v-2h1v1h4v-3h-5v-5h6v2h-1v-1h-4v3h5v5zm-8-9h6v1H6v3h4v1H6v3h5v1H5z");
}
</style><path class="zh2t14boi"/>`,
		"fallback": "material-symbols-light:language-spanish-outline-sharp",
	});
}

export default Component;

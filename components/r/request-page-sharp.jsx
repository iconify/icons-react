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
		"content": `<style>.lu90racvf {
  fill: currentColor;
  d: path("M11.5 17.5h1v-1h2v-4h-4v-2h4v-1h-2v-1h-1v1h-2v4h4v2h-4v1h2zM5 21V3h8.577L19 8.423V21z");
}
</style><path class="lu90racvf"/>`,
		"fallback": "material-symbols-light:request-page-sharp",
	});
}

export default Component;

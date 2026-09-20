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
		"content": `<style>.som1n_3fr {
  fill: currentColor;
  d: path("M2.73 20.154V3.904L7.23.769l4.5 3.135v3.25h9.54v13zm1-1h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm0-4h3v-3h-3zm4 0h3v-3h-3zm0 12h12.54v-11H7.73zm6.386-7v-1H17.5v1zm0 4v-1H17.5v1zm-3.385-4v-1h1v1zm0 4v-1h1v1z");
}
</style><path class="som1n_3fr"/>`,
		"fallback": "material-symbols-light:source-environment-outline-sharp",
	});
}

export default Component;

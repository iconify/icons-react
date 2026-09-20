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
		"content": `<style>.n952uzept {
  fill: currentColor;
  d: path("M13 13.5h1v-3h3v-1h-3v-3h-1v3h-3v1h3zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-16v12z");
}
</style><path class="n952uzept"/>`,
		"fallback": "material-symbols-light:library-add-outline-sharp",
	});
}

export default Component;

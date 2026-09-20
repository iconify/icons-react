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
		"content": `<style>.berj5wbmr {
  fill: currentColor;
  d: path("M4 19.385v-6h16v6zm1-1h14v-4H5zm-1-7.77v-6h16v6zm1-1h14v-4H5zm0 4.77v4zm0-8.77v4z");
}
</style><path class="berj5wbmr"/>`,
		"fallback": "material-symbols-light:view-agenda-outline-sharp",
	});
}

export default Component;

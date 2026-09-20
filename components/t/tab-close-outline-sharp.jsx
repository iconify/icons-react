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
		"content": `<style>.dd2z5417k {
  fill: currentColor;
  d: path("m11.4 12.789l2.1-2.1l2.1 2.1l.688-.689l-2.1-2.1l2.1-2.1l-.688-.689l-2.1 2.1l-2.1-2.1l-.688.689l2.1 2.1l-2.1 2.1zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4z");
}
</style><path class="dd2z5417k"/>`,
		"fallback": "material-symbols-light:tab-close-outline-sharp",
	});
}

export default Component;

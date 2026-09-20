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
		"content": `<style>.hchqvv5eb {
  fill: currentColor;
  d: path("M13.192 15.616h4.424V8.385h-4.424zm-6.807 0h4.423V8.385H6.385zM19.769 8V6h-2V5h2V3h1v2h2v1h-2v2zM4 18V6zm-1 1V5h12.385v1H4v12h16v-7.615h1V19z");
}
</style><path class="hchqvv5eb"/>`,
		"fallback": "material-symbols-light:splitscreen-landscape-add-outline-sharp",
	});
}

export default Component;

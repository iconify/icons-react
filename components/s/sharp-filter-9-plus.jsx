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
		"content": `<style>.an00qqb8z {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm11 9V6H9v5h3v1H9v2zm-3-5V8h1v1zm12-8H5v18h18zm-2 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14z");
}
</style><path class="an00qqb8z"/>`,
		"fallback": "ic:sharp-filter-9-plus",
	});
}

export default Component;

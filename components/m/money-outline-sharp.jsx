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
		"content": `<style>.hbtaooo4z {
  fill: currentColor;
  d: path("M14.27 15.5h3.96v-7h-3.96zm1-1v-5h1.96v5zm-6.732 1H12.5v-7H8.539zm1-1v-5H11.5v5zm-3.769 1h1v-7h-1zM3 19V5h18v14zM4 6v12zm0 12h16V6H4z");
}
</style><path class="hbtaooo4z"/>`,
		"fallback": "material-symbols-light:money-outline-sharp",
	});
}

export default Component;

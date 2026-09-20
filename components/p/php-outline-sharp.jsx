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
		"content": `<style>.hvk0r0kpd {
  fill: currentColor;
  d: path("M3 15V9h5v4H4.5v2zm6.5 0V9H11v2h2V9h1.5v6H13v-2.5h-2V15zm7 0V9h5v4H18v2zm-12-3.5h2v-1h-2zm13.5 0h2v-1h-2z");
}
</style><path class="hvk0r0kpd"/>`,
		"fallback": "material-symbols:php-outline-sharp",
	});
}

export default Component;

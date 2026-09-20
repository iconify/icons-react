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
		"content": `<style>.ggdisha9s {
  fill: currentColor;
  d: path("M6 22v-7h1v3.5h10v-13H7V9H6V2h12v20zm4-6.692l-.708-.708l2.089-2.1H2.5v-1h8.88L9.293 9.4L10 8.692L13.308 12z");
}
</style><path class="ggdisha9s"/>`,
		"fallback": "material-symbols-light:open-in-phone-sharp",
	});
}

export default Component;

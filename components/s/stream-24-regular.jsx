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
		"content": `<style>.pj16w-bon {
  fill: currentColor;
  d: path("M9 11a7.5 7.5 0 0 1 7.5-7.5h.095a.75.75 0 0 0 0-1.5H16.5a9 9 0 0 0-9 9v1.25c0 .69-.56 1.25-1.25 1.25h-3.5a.75.75 0 0 0 0 1.5h3.5A2.75 2.75 0 0 0 9 12.25zm7.75-4a4.25 4.25 0 0 0-4.25 4.25v1.5a5.75 5.75 0 0 1-5.75 5.75h-4a.75.75 0 0 1 0-1.5h4A4.25 4.25 0 0 0 11 12.75v-1.5a5.75 5.75 0 0 1 5.75-5.75h4.5a.75.75 0 0 1 0 1.5zm.5 3.5c-.69 0-1.25.56-1.25 1.25V13a9 9 0 0 1-9 9h-.25a.75.75 0 0 1 0-1.5H7a7.5 7.5 0 0 0 7.5-7.5v-1.25A2.75 2.75 0 0 1 17.25 9h4a.75.75 0 0 1 0 1.5z");
}
</style><path class="pj16w-bon"/>`,
		"fallback": "fluent:stream-24-regular",
	});
}

export default Component;

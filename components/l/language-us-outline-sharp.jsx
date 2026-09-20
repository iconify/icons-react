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
		"content": `<style>.k9k2q-2wl {
  fill: currentColor;
  d: path("M5 16.5v-9h1v8h4v-8h1v9zm8 0v-2h1v1h4v-3h-5v-5h6v2h-1v-1h-4v3h5v5z");
}
</style><path class="k9k2q-2wl"/>`,
		"fallback": "material-symbols-light:language-us-outline-sharp",
	});
}

export default Component;

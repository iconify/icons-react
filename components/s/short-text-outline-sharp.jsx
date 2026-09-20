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
		"content": `<style>.zyq38cc_t {
  fill: currentColor;
  d: path("M5 14.5v-1h8v1zm0-4v-1h14v1z");
}
</style><path class="zyq38cc_t"/>`,
		"fallback": "material-symbols-light:short-text-outline-sharp",
	});
}

export default Component;

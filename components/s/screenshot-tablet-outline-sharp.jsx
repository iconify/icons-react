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
		"content": `<style>.keqz_5spf {
  fill: currentColor;
  d: path("M1 20V4h22v16zM4 6H3v12h1zm2 12h12V6H6zM20 6v12h1V6zm0 0h1zM4 6H3zm9 11h4v-4h-1.5v2.5H13zm-6-6h1.5V8.5H11V7H7z");
}
</style><path class="keqz_5spf"/>`,
		"fallback": "material-symbols:screenshot-tablet-outline-sharp",
	});
}

export default Component;

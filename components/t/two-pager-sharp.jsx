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
		"content": `<style>.mrzow-tyc {
  fill: currentColor;
  d: path("M3 19V5h18v14zm9.5-1H20V6h-7.5zm-7.115-2.5h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm8.5 6h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73z");
}
</style><path class="mrzow-tyc"/>`,
		"fallback": "material-symbols-light:two-pager-sharp",
	});
}

export default Component;

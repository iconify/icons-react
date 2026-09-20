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
		"content": `<style>.cod4p0xdc {
  fill: currentColor;
  d: path("M14 21v-2.73h7V21zM3 19V5h18v6.116h-1V6h-7.5v5.289h-1V19zm9.896-1.5l.789-4h7.63l.789 4zm-7.511-2h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm8.5 0v-1h4.73v1z");
}
</style><path class="cod4p0xdc"/>`,
		"fallback": "material-symbols-light:two-pager-store-sharp",
	});
}

export default Component;

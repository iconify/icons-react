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
		"content": `<style>.j-hjsyzue {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h7.5V6H4zm8.5 0H20V6h-7.5zm-7.115-2.5h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm8.5 6h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zm0-3h4.73v-1h-4.73zM11.5 18V6z");
}
</style><path class="j-hjsyzue"/>`,
		"fallback": "material-symbols-light:two-pager-outline-sharp",
	});
}

export default Component;

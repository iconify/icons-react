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
		"content": `<style>.ky5zau9vn {
  fill: currentColor;
  d: path("M3 20v-2h18v2zm0-4V8h18v8zM3 6V4h18v2z");
}
</style><path class="ky5zau9vn"/>`,
		"fallback": "material-symbols:view-day-sharp",
	});
}

export default Component;

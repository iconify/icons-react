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
		"content": `<style>.wmrr7ib5e {
  fill: currentColor;
  d: path("M8.5 11.5h7v-1h-7zM9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="wmrr7ib5e"/>`,
		"fallback": "material-symbols-light:remove-from-queue-sharp",
	});
}

export default Component;

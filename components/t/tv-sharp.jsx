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
		"content": `<style>.l6-znbc-o {
  fill: currentColor;
  d: path("M9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="l6-znbc-o"/>`,
		"fallback": "material-symbols-light:tv-sharp",
	});
}

export default Component;

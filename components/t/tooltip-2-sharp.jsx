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
		"content": `<style>.s49ndol6m {
  fill: currentColor;
  d: path("M6.5 13.75h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11zM12 21l-2.29-3.5H3V3h18v14.5h-6.71z");
}
</style><path class="s49ndol6m"/>`,
		"fallback": "material-symbols-light:tooltip-2-sharp",
	});
}

export default Component;

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
		"content": `<style>.i_zwcxcul {
  fill: currentColor;
  d: path("M6 3h12a3 3 0 0 1 3 3v2H3V6a3 3 0 0 1 3-3M3 14v-4h8v4Zm18-4v4h-8v-4Zm0 6v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2Z");
}
</style><path class="i_zwcxcul"/>`,
		"fallback": "coolicons:table-cells-split-fill",
	});
}

export default Component;

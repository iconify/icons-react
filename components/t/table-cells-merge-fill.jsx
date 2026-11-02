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
		"content": `<style>.fsir0_b0q {
  fill: currentColor;
  d: path("M11 8H3V6a3 3 0 0 1 3-3h5Zm2-5h5a3 3 0 0 1 3 3v2h-8ZM3 14v-4h18v4Zm8 7H6a3 3 0 0 1-3-3v-2h8Zm10-5v2a3 3 0 0 1-3 3h-5v-5Z");
}
</style><path class="fsir0_b0q"/>`,
		"fallback": "coolicons:table-cells-merge-fill",
	});
}

export default Component;

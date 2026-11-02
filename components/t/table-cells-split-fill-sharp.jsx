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
		"content": `<style>.b3b0uzbzp {
  fill: currentColor;
  d: path("M3 8V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4Zm0 6v-4h8v4Zm18-4v4h-8v-4ZM3 16h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><path class="b3b0uzbzp"/>`,
		"fallback": "coolicons:table-cells-split-fill-sharp",
	});
}

export default Component;

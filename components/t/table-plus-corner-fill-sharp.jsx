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
		"content": `<style>.wsre-obam {
  fill: currentColor;
  d: path("M11 3v5H3V4a1 1 0 0 1 1-1Zm10 1v4h-8V3h7a1 1 0 0 1 1 1M3 10h7v4H3Zm15 3v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0M3 16h7v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z");
}
</style><path class="wsre-obam"/>`,
		"fallback": "coolicons:table-plus-corner-fill-sharp",
	});
}

export default Component;

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
		"content": `<style>.fns7kab-k {
  fill: currentColor;
  d: path("M11 3v5H3a5 5 0 0 1 5-5Zm10 5h-8V3h3a5 5 0 0 1 5 5M3 10h7v4H3Zm15 3v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0M3 16h7v4a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5");
}
</style><path class="fns7kab-k"/>`,
		"fallback": "coolicons:table-plus-corner-fill-round",
	});
}

export default Component;

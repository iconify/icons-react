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
		"content": `<style>.r20pbs6eb {
  fill: currentColor;
  d: path("M3 8a5 5 0 0 1 5-5h3v5Zm18 0h-8V3h3a5 5 0 0 1 5 5M3 10h18v4H3Zm0 6h8v5H8a5 5 0 0 1-5-5m18 0a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21h-3v-5Z");
}
</style><path class="r20pbs6eb"/>`,
		"fallback": "coolicons:table-cells-merge-fill-round",
	});
}

export default Component;

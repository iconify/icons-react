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
		"content": `<style>.cfqqx6mhr {
  fill: currentColor;
  d: path("M8 3h3v5H3a5 5 0 0 1 5-5m5 5V3h3a5 5 0 0 1 5 5ZM3 10h8v4H3Zm18 4h-8v-4h8Zm-10 2v5H8a5 5 0 0 1-5-5Zm2 5v-5h8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21Z");
}
</style><path class="cfqqx6mhr"/>`,
		"fallback": "coolicons:table-fill-round",
	});
}

export default Component;

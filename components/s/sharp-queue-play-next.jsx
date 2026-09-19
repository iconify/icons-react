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
		"content": `<style>.r-e81tp7u {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2zm11 8l-4.5 4.5L18 21l3-3l-3-3l1.5-1.5z");
}
</style><path class="r-e81tp7u"/>`,
		"fallback": "ic:sharp-queue-play-next",
	});
}

export default Component;

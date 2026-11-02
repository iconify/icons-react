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
		"content": `<style>.nmfytobta {
  fill: currentColor;
  d: path("M11 4.061V3a1 1 0 0 1 2 0v1.061A8.015 8.015 0 0 1 19.939 11H21a1 1 0 0 1 0 2h-1.061A8.015 8.015 0 0 1 13 19.939V21a1 1 0 0 1-2 0v-1.061A8.015 8.015 0 0 1 4.061 13H3a1 1 0 0 1 0-2h1.061A8.015 8.015 0 0 1 11 4.061m-3 7.936V12a4 4 0 1 0 8 .001a4 4 0 0 0-8-.004M10 12a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 12");
}
</style><path class="nmfytobta"/>`,
		"fallback": "coolicons:locate-fill-round",
	});
}

export default Component;

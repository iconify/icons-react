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
		"content": `<style>.sqznzlipx {
  fill: currentColor;
  d: path("M2 11a5 5 0 0 1 5-5h4a4.99 4.99 0 0 1 4.001 2H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4.999A4.99 4.99 0 0 1 11 18H7a5 5 0 0 1-5-5Zm8 2v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0m6-2v2c0 .335-.032.672-.099 1H20v-1h-1a1 1 0 0 1 0-2h1v-1h-4.099c.067.328.099.665.099 1");
}
</style><path class="sqznzlipx"/>`,
		"fallback": "coolicons:security-key-fill-round",
	});
}

export default Component;

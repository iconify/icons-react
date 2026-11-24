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
		"content": `<style>.wu3fu182f {
  fill: currentColor;
  d: path("M7 8.099V7a5 5 0 0 1 10 0v1.099A5.01 5.01 0 0 1 21 13v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-4a5.01 5.01 0 0 1 4-4.901M15 7a3 3 0 1 0-6 0v1h6Zm-4.842 7.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558");
}
</style><path class="wu3fu182f"/>`,
		"fallback": "coolicons:lock-fill-round",
	});
}

export default Component;

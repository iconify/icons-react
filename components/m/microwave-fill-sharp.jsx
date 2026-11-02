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
		"content": `<style>.vmvpcebno {
  fill: currentColor;
  d: path("M2 18V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-1H3a1 1 0 0 1-1-1M6 8v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1m12 6V8a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0");
}
</style><path class="vmvpcebno"/>`,
		"fallback": "coolicons:microwave-fill-sharp",
	});
}

export default Component;

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
		"content": `<style>.wdcmqhbpi {
  fill: currentColor;
  d: path("M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7c0-.265.105-.52.293-.707l4-4A1 1 0 0 1 9 2h6c.265 0 .52.105.707.293l4 4A1 1 0 0 1 20 7ZM13 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m2 9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="wdcmqhbpi"/>`,
		"fallback": "coolicons:tag-minus-fill",
	});
}

export default Component;

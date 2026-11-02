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
		"content": `<style>.q5n2a1blr {
  fill: currentColor;
  d: path("m11 12.414l-5-5V9a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H7.414L12 10.586L16.586 6H15a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V7.414l-5 5V19a1 1 0 0 1-2 0Z");
}
</style><path class="q5n2a1blr"/>`,
		"fallback": "coolicons:split-bulk-round",
	});
}

export default Component;

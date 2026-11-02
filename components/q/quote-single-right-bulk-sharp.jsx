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
		"content": `<style>.r9-d2xaot {
  fill: currentColor;
  d: path("M14 12V8h-4v4Zm2 1c0 1.33-.522 2.597-1.464 3.536A5 5 0 0 1 11 18a1 1 0 0 1 0-2c1.27 0 2.405-.804 2.83-2H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z");
}
</style><path class="r9-d2xaot"/>`,
		"fallback": "coolicons:quote-single-right-bulk-sharp",
	});
}

export default Component;

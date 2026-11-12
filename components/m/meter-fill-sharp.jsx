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
		"content": `<style>.jf0maxuoz {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 2 0h4a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 2 0ZM9 6H7v5h2Zm2 0v5h2V6Zm6 0h-2v5h2ZM8 16a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z");
}
</style><path class="jf0maxuoz"/>`,
		"fallback": "coolicons:meter-fill-sharp",
	});
}

export default Component;

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
		"content": `<style>.gkxc7b9qm {
  fill: currentColor;
  d: path("M8 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm6-1h-4v1h4Zm-4 16h4v-1h-4Z");
}
</style><path class="gkxc7b9qm"/>`,
		"fallback": "coolicons:smartwatch-fill-sharp",
	});
}

export default Component;

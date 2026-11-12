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
		"content": `<style>.vtxt4mcoi {
  fill: currentColor;
  d: path("M6 2a1 1 0 0 1 1 1v4h3V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h3V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 0 2v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4h-3v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4H7v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 0-2V3a1 1 0 0 1 1-1Zm1 13h3V9H7Zm7 0h3V9h-3Z");
}
</style><path class="vtxt4mcoi"/>`,
		"fallback": "coolicons:radiator-fill-sharp",
	});
}

export default Component;

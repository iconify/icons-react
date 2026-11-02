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
		"content": `<style>.adffvebhy {
  fill: currentColor;
  d: path("M22 4v4h-7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1m-6 10v-4h6v4Zm2-3a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="adffvebhy"/>`,
		"fallback": "coolicons:wallet-fill-sharp",
	});
}

export default Component;

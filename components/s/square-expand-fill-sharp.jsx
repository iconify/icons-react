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
		"content": `<style>.rpwifvbai {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M13 6a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Zm-2 12a1 1 0 0 0 0-2H8v-3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z");
}
</style><path class="rpwifvbai"/>`,
		"fallback": "coolicons:square-expand-fill-sharp",
	});
}

export default Component;

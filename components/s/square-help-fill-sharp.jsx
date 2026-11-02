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
		"content": `<style>.n1showb-n {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m6-10a1 1 0 0 0 2 0a2 2 0 1 1 2 2a1 1 0 0 0 0 2a4 4 0 1 0-4-4m4 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="n1showb-n"/>`,
		"fallback": "coolicons:square-help-fill-sharp",
	});
}

export default Component;

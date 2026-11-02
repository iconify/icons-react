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
		"content": `<style>.g_0answaf {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m11-11a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l4.293 4.293a.999.999 0 1 0 1.414-1.414L11.414 10Z");
}
</style><path class="g_0answaf"/>`,
		"fallback": "coolicons:square-arrow-up-left-fill-sharp",
	});
}

export default Component;

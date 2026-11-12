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
		"content": `<style>.m_pxpplcy {
  fill: currentColor;
  d: path("M2 13V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8Zm0 2h9v5H3a1 1 0 0 1-1-1Zm20 0v4a1 1 0 0 1-1 1h-8v-5Z");
}
</style><path class="m_pxpplcy"/>`,
		"fallback": "coolicons:touchpad-fill-sharp",
	});
}

export default Component;

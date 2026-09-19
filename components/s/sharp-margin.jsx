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
		"content": `<style>.b4yqv1blq {
  fill: currentColor;
  d: path("M3 3v18h18V3zm6 10H7v-2h2zm0-4H7V7h2zm4 4h-2v-2h2zm0-4h-2V7h2zm4 4h-2v-2h2zm0-4h-2V7h2z");
}
</style><path class="b4yqv1blq"/>`,
		"fallback": "ic:sharp-margin",
	});
}

export default Component;

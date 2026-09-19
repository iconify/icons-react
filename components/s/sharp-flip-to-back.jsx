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
		"content": `<style>.sdklxv_jt {
  fill: currentColor;
  d: path("M9 7H7v2h2zm0 4H7v2h2zm4 4h-2v2h2zm0-12h-2v2h2zM9 3H7v2h2zm12 0h-2v2h2zm0 12h-2v2h2zM9 15H7v2h2zm10-2h2v-2h-2zm0-4h2V7h-2zM5 7H3v14h14v-2H5zm10-2h2V3h-2zm0 12h2v-2h-2z");
}
</style><path class="sdklxv_jt"/>`,
		"fallback": "ic:sharp-flip-to-back",
	});
}

export default Component;

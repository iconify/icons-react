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
		"content": `<style>.jc1vp68up {
  fill: currentColor;
  d: path("M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2l4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m0 13H4v-2h16zm0-5H4V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z");
}
</style><path class="jc1vp68up"/>`,
		"fallback": "ic:round-card-membership",
	});
}

export default Component;

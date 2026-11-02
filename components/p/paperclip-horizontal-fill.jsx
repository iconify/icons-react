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
		"content": `<style>.idr8lu39n {
  fill: currentColor;
  d: path("M15 5a7 7 0 1 1 0 14H7A5 5 0 0 1 7 9h8a3 3 0 1 1 0 6H8a1 1 0 0 1 0-2h7a1 1 0 0 0 0-2H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10H7a1 1 0 0 1 0-2Z");
}
</style><path class="idr8lu39n"/>`,
		"fallback": "coolicons:paperclip-horizontal-fill",
	});
}

export default Component;

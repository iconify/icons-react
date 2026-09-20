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
		"content": `<style>.k03nvsits {
  fill: currentColor;
  d: path("M20.25 12a.75.75 0 0 1 .51 1.3L16 17.72v2.03A2.25 2.25 0 0 1 13.75 22h-3.5A2.25 2.25 0 0 1 8 19.75v-2.03L3.24 13.3a.751.751 0 0 1 .51-1.3zm-6-3a2.25 2.25 0 0 1 2.236 2h-8.97A2.25 2.25 0 0 1 9.75 9zM12 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6");
}
</style><path class="k03nvsits"/>`,
		"fallback": "fluent:presenter-24-filled",
	});
}

export default Component;

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
		"content": `<style>.sl-byef7f {
  fill: currentColor;
  d: path("M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z");
}
</style><path class="sl-byef7f"/>`,
		"fallback": "ic:sharp-house",
	});
}

export default Component;

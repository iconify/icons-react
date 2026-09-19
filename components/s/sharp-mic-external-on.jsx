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
		"content": `<style>.ndtqgwbyu {
  fill: currentColor;
  d: path("M9.22 7H4.78C4.3 6.47 4 5.77 4 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .77-.3 1.47-.78 2M20 2v20h-2V4h-4v18H6v-4H5L4 8h6L9 18H8v2h4V2z");
}
</style><path class="ndtqgwbyu"/>`,
		"fallback": "ic:sharp-mic-external-on",
	});
}

export default Component;

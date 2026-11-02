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
		"content": `<style>.oly0nib0u {
  fill: currentColor;
  d: path("M5 4a1 1 0 0 1 1.894-.447L12 13.764l5.106-10.211A.998.998 0 0 1 19 4v16a1 1 0 0 1-2 0V8.236l-4.106 8.211a.998.998 0 0 1-1.788 0L7 8.236V20a1 1 0 0 1-2 0Z");
}
</style><path class="oly0nib0u"/>`,
		"fallback": "coolicons:letter-m-bulk-round",
	});
}

export default Component;

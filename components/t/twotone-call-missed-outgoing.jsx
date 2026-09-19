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
		"content": `<style>.mzzcr1blp {
  fill: currentColor;
  d: path("M19 10.41V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41l9 9z");
}
</style><path class="mzzcr1blp"/>`,
		"fallback": "ic:twotone-call-missed-outgoing",
	});
}

export default Component;

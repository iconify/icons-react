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
		"content": `<style>.x4th41tiw {
  fill: currentColor;
  d: path("M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2zm-3 4V8h-3V5H3v16h16V11zM5 19l3-4l2 3l3-4l4 5z");
}
</style><path class="x4th41tiw"/>`,
		"fallback": "ic:sharp-add-photo-alternate",
	});
}

export default Component;

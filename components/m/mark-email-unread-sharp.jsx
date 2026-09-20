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
		"content": `<style>.dn6lj7lmp {
  fill: currentColor;
  d: path("M16.875 7.125Q16 6.25 16 5t.875-2.125T19 2t2.125.875T22 5t-.875 2.125T19 8t-2.125-.875M2 20V4h12.1q-.1.5-.1 1t.1 1q.175.8.575 1.488T15.65 8.7L12 11L4 6v2l8 5l5.275-3.3q.425.15.85.225T19 10q.8 0 1.575-.25T22 9v11z");
}
</style><path class="dn6lj7lmp"/>`,
		"fallback": "material-symbols:mark-email-unread-sharp",
	});
}

export default Component;

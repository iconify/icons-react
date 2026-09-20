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
		"content": `<style>.d4if0kbuq {
  fill: currentColor;
  d: path("M16.875 5.125Q16 4.25 16 3t.875-2.125T19 0t2.125.875T22 3t-.875 2.125T19 6t-2.125-.875M2 22V2h12.1q-.1.5-.1 1t.1 1q.35 1.725 1.725 2.863T19 8q.8 0 1.575-.25T22 7v11H6z");
}
</style><path class="d4if0kbuq"/>`,
		"fallback": "material-symbols:mark-chat-unread-sharp",
	});
}

export default Component;

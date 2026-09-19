import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gu6yrrb9h {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M17.6 30.5V13.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.4-2.9-14.3-5-24.6h-4.4v23.5c-.8-.3-2.3-.4-3.3-.4c-10.7.1-10.7 11 0 11c3.9 0 7.6-2.4 7.6-5.5M53.6 2h-4.4v23.5c-.8-.3-2.3-.4-3.3-.4c-10.6 0-10.6 10.9.1 10.9c3.9 0 7.6-2.4 7.6-5.5V13.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.3-2.9-14.2-5.1-24.5M26.3 28v23.5c-.8-.3-2.3-.4-3.3-.4c-10.7 0-10.7 10.9 0 10.9c3.9 0 7.6-2.4 7.6-5.5V39.6s8.2 3.9 3.8 12.6c-.1.3 1.1.6 1.3.3c9-15.4-2.9-14.3-5-24.6h-4.4z");
}
</style><path class="gu6yrrb9h"/>`,
		"fallback": "emojione:musical-notes",
	});
}

export default Component;

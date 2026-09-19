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
		"content": `<style>.lm-sgib-a {
  fill: currentColor;
  d: path("m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm0 6l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25zm-7.5-5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zm-1.51 3.49L9 15.17l-.99-2.18L5.83 12l2.18-.99L9 8.83l.99 2.18l2.18.99z");
}

.wu_r6j92n {
  fill: currentColor;
  d: path("M9.99 11.01L9 8.83l-.99 2.18l-2.18.99l2.18.99l.99 2.18l.99-2.18l2.18-.99z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="wu_r6j92n"/><path class="lm-sgib-a"/>`,
		"fallback": "ic:twotone-auto-awesome",
	});
}

export default Component;

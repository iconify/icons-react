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
		"content": `<style>.bch3suk8g {
  fill: currentColor;
  d: path("M19 10c.34 0 .67.03 1 .08V4H4v12h8.08c.49-3.39 3.39-6 6.92-6");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.do7msj2bx {
  fill: currentColor;
  d: path("m17.34 20l-3.54-3.54l1.41-1.41l2.12 2.12l4.24-4.24L23 14.34zm-5.26-4H4V4h16v6.08c.71.1 1.38.31 2 .6V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18l4-4h6c0-.14.02-.27.03-.4Q12 17.3 12 17c0-.34.03-.67.08-1");
}
</style><path class="bch3suk8g"/><path class="do7msj2bx"/>`,
		"fallback": "ic:twotone-mark-chat-read",
	});
}

export default Component;

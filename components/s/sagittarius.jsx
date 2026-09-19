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
		"content": `<style>.d-ykg1bnb {
  fill: var(--svg-color--fff, #fff);
  stroke: var(--svg-color--fff, #fff);
  stroke-miterlimit: 10;
  d: path("M48 17.4c-.1-.8-.6-1.4-1.4-1.4H32c-1.9 0-1.9 2.9 0 2.9h11L24.7 37.2L18.5 31c-1.3-1.3-3.4.7-2.1 2.1l6.2 6.2l-6.2 6.2c-.4.5-.5 1.1-.2 1.5q.3.75 1.2.9h.4c.1 0 .1 0 .2-.1c.1 0 .1-.1.2-.1c.1-.1.2-.1.2-.2l6.2-6.2l6.2 6.2c1.3 1.3 3.4-.7 2.1-2.1l-6.2-6.2c6.2-6 12.3-12.1 18.4-18.2v11c0 1.9 2.9 1.9 2.9 0z");
}

.ux0iofbdv {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--428bc1, #428bc1);
}
</style><circle class="ux0iofbdv"/><path class="d-ykg1bnb"/>`,
		"fallback": "emojione:sagittarius",
	});
}

export default Component;

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
		"content": `<style>.uf_c0lb7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 21.5V9a6 6 0 0 1 12 0v12.5Zm3.5-11h5m3.5 3.5h2.75V6.5h2V9h-2");
}
</style><path class="uf_c0lb7a"/>`,
		"fallback": "uix:mailbox-street",
	});
}

export default Component;

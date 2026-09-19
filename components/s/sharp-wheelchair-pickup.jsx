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
		"content": `<style>.o7oloxcwq {
  fill: currentColor;
  d: path("M4.5 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m5.5 6.95V7H3v8h2v7h3.5v-.11c-1.24-1.26-2-2.99-2-4.89c0-2.58 1.41-4.84 3.5-6.05M16.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3c0-1.11.61-2.06 1.5-2.58v-2.16c-2.02.64-3.5 2.51-3.5 4.74c0 2.76 2.24 5 5 5s5-2.24 5-5zm3.04-3H15V8h-2v8h5.46l2.47 3.71l1.66-1.11z");
}
</style><path class="o7oloxcwq"/>`,
		"fallback": "ic:sharp-wheelchair-pickup",
	});
}

export default Component;

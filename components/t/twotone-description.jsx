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
		"content": `<style>.eel29bcos {
  fill: currentColor;
  d: path("M13 4H6v16h12V9h-5zm3 14H8v-2h8zm0-6v2H8v-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ks64glbdq {
  fill: currentColor;
  d: path("M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z");
}
</style><path class="eel29bcos"/><path class="ks64glbdq"/>`,
		"fallback": "ic:twotone-description",
	});
}

export default Component;

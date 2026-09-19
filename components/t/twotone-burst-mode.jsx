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
		"content": `<style>.enz0hdb6j {
  fill: currentColor;
  d: path("M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m-1 12H11V7h10zm-3.57-4.38l-2 2.57L14 13.47l-2 2.52h8z");
}

.lwi82w9pb {
  fill: currentColor;
  d: path("M11 17h10V7H11zm3-3.53l1.43 1.72l2-2.58L20 15.99h-8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="lwi82w9pb"/><path class="enz0hdb6j"/>`,
		"fallback": "ic:twotone-burst-mode",
	});
}

export default Component;

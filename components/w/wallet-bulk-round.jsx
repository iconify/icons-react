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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ihtwd5bzq {
  d: path("M21 10h-3a2 2 0 1 0 0 4h3a1 1 0 0 1 0 2h-3a4 4 0 0 1 0-8h3a1 1 0 0 1 0 2m-3 1h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}

.l3h0twbhh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 21H7a5 5 0 0 1-5-5Z");
}
</style><g class="cuyn6tgcc"><path class="l3h0twbhh"/><path class="ihtwd5bzq"/></g>`,
		"fallback": "coolicons:wallet-bulk-round",
	});
}

export default Component;

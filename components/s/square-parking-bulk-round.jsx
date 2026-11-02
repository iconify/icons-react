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

.yqxcxg4xa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Z");
}

.zcnxjr1kl {
  d: path("M8 13V7a1 1 0 0 1 1-1h3a4 4 0 0 1 0 8h-2v3a1 1 0 0 1-2 0Zm2-1h2a1.999 1.999 0 0 0 1.732-3A2 2 0 0 0 12 8h-2Z");
}
</style><g class="cuyn6tgcc"><path class="yqxcxg4xa"/><path class="zcnxjr1kl"/></g>`,
		"fallback": "coolicons:square-parking-bulk-round",
	});
}

export default Component;

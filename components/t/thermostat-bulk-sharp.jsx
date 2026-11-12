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

.jyc5stphj {
  d: path("M11 12.171a3 3 0 1 1-2 0V7a1 1 0 0 1 2 0ZM10 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6-7a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-1 3a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2Z");
}

.riis51qtn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}
</style><g class="cuyn6tgcc"><path class="riis51qtn"/><path class="jyc5stphj"/></g>`,
		"fallback": "coolicons:thermostat-bulk-sharp",
	});
}

export default Component;

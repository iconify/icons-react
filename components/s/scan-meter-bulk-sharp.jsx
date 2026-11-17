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

.nke5pgnzp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 10a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm2 1v2h2v-2Zm4 2h2v-2h-2Zm4 0h2v-2h-2Z");
}

.w8xmrqbof {
  d: path("M2 7V3a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H4v3a1 1 0 0 1-2 0m15-5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V4h-3a1 1 0 0 1 0-2M6 9h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m3 2H7v2h2Zm2 0v2h2v-2Zm4 0v2h2v-2ZM3 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Zm19-5v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0");
}
</style><g class="cuyn6tgcc"><path class="nke5pgnzp"/><path class="w8xmrqbof"/></g>`,
		"fallback": "coolicons:scan-meter-bulk-sharp",
	});
}

export default Component;

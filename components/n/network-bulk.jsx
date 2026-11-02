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

.j3v67ukgj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2ZM2 17a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm12 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z");
}

.juvy6_bfs {
  d: path("M8 11h3V8a1 1 0 0 1 2 0v3h3a3.004 3.004 0 0 1 3 3v2a1 1 0 0 1-2 0v-2a1 1 0 0 0-1-1H7.998A1 1 0 0 0 7 14v2a1 1 0 0 1-2 0v-2.001A3 3 0 0 1 8 11");
}
</style><g class="cuyn6tgcc"><path class="j3v67ukgj"/><path class="juvy6_bfs"/></g>`,
		"fallback": "coolicons:network-bulk",
	});
}

export default Component;

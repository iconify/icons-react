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

.ow2n6lbby {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm5 9a5 5 0 1 0 10.001-.001A5 5 0 0 0 7 12");
}

.z-yv9_bws {
  d: path("M5.551 9.275a7 7 0 0 1 9.173-3.723a7 7 0 0 1 3.724 9.172A7 7 0 0 1 5.551 9.275m1.842 4.671a5 5 0 1 0 9.212-3.892a5 5 0 0 0-9.212 3.892m.725-2.53a1.501 1.501 0 0 1 2.764 1.168a1.501 1.501 0 0 1-2.764-1.168m5 0a1.501 1.501 0 0 1 2.764 1.168a1.501 1.501 0 0 1-2.764-1.168");
}
</style><g class="cuyn6tgcc"><path class="ow2n6lbby"/><path class="z-yv9_bws"/></g>`,
		"fallback": "coolicons:socket-bulk-sharp",
	});
}

export default Component;

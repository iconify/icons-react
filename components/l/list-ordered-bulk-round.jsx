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

.gpg90hbor {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.293 3.293A1 1 0 0 1 7 4v6a1 1 0 0 1-2 0V6.414l-.293.293a.999.999 0 1 1-1.414-1.414Zm3.414 13.414L6.414 19H8a1 1 0 0 1 0 2H4a1.002 1.002 0 0 1-.707-1.707l3.646-3.646A1.002 1.002 0 0 0 5 16a1 1 0 0 1-2 0a3.001 3.001 0 0 1 6 0c0 .265-.105.52-.293.707");
}

.pds1hmbpr {
  d: path("M20 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="gpg90hbor"/><path class="pds1hmbpr"/></g>`,
		"fallback": "coolicons:list-ordered-bulk-round",
	});
}

export default Component;

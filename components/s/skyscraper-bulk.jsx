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

.nfhtzabdb {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2a2 2 0 0 1 2 2v15a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2");
}

.y5uj3n_0n {
  d: path("M12 7h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m0 4h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m0 4h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m9 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="nfhtzabdb"/><path class="y5uj3n_0n"/></g>`,
		"fallback": "coolicons:skyscraper-bulk",
	});
}

export default Component;

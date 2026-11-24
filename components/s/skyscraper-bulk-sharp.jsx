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

.otuecdfdg {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 4h1V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1");
}

.y5uj3n_0n {
  d: path("M12 7h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m0 4h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m0 4h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2m9 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="otuecdfdg"/><path class="y5uj3n_0n"/></g>`,
		"fallback": "coolicons:skyscraper-bulk-sharp",
	});
}

export default Component;

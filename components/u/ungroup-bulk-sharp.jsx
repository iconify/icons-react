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
		"content": `<style>.bmxevhbix {
  d: path("M11 14a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1Zm2 4h5v-3h-5Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dfexzobhe {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="dfexzobhe"/><path class="bmxevhbix"/></g>`,
		"fallback": "coolicons:ungroup-bulk-sharp",
	});
}

export default Component;

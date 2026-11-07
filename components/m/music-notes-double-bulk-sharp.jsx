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
		"content": `<style>.bq9x1967s {
  d: path("M8 18V7a1 1 0 0 1 .684-.949l12-4A1.002 1.002 0 0 1 22 3v13a1 1 0 0 1-2 0V9.387l-10 3.334V18a1 1 0 0 1-2 0M20 7.279V4.387L10 7.721v2.892Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.dxl_10b1n {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M14 16a4 4 0 1 1 8 0a4 4 0 0 1-8 0M2 18a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g class="cuyn6tgcc"><path class="dxl_10b1n"/><path class="bq9x1967s"/></g>`,
		"fallback": "coolicons:music-notes-double-bulk-sharp",
	});
}

export default Component;

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

.gzq1g682w {
  d: path("M10 13h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}

.lsxhw2bwk {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m15.84 5.153l5.5 9A4.5 4.5 0 0 1 17.5 21h-11a4.5 4.5 0 0 1-3.84-6.847l5.5-9a4.502 4.502 0 0 1 7.68 0");
}
</style><g class="cuyn6tgcc"><path class="lsxhw2bwk"/><path class="gzq1g682w"/></g>`,
		"fallback": "coolicons:triangle-minus-bulk-round",
	});
}

export default Component;

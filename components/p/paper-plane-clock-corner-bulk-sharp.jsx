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

.lcz4gsbts {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11.684 2.051a1.001 1.001 0 0 1 1.265 1.265l-3 9a1 1 0 0 1-1.843.131L6.255 8.745L2.553 6.894a1 1 0 0 1 .131-1.843Z");
}

.wro3hhbbz {
  d: path("m6.293 7.293l1-1a.999.999 0 1 1 1.414 1.414l-1 1a.999.999 0 1 1-1.414-1.414M11 17.002v-.004a6 6 0 1 1 12-.004a6 6 0 0 1-12 .008m2.026-.464a4 4 0 1 0 7.947.923a4 4 0 0 0-7.947-.923M16 17v-2a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="lcz4gsbts"/><path class="wro3hhbbz"/></g>`,
		"fallback": "coolicons:paper-plane-clock-corner-bulk-sharp",
	});
}

export default Component;

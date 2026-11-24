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
		"content": `<style>.bs1hayv1w {
  d: path("M4 6h6a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m10.707 2.293l3 3a.999.999 0 1 1-1.414 1.414l-3-3a.999.999 0 1 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.gstn2ybzw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 17c0-.265.105-.52.293-.707l9-9a2.414 2.414 0 0 1 3.414 0l1 1a2.414 2.414 0 0 1 0 3.414l-9 9A1 1 0 0 1 9 21H6a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="gstn2ybzw"/><path class="bs1hayv1w"/></g>`,
		"fallback": "coolicons:pencil-minus-bulk",
	});
}

export default Component;

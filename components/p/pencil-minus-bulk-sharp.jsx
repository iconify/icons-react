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

.gapi2ab1b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 17c0-.265.105-.52.293-.707l10-10a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-10 10A1 1 0 0 1 9 21H6a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="gapi2ab1b"/><path class="bs1hayv1w"/></g>`,
		"fallback": "coolicons:pencil-minus-bulk-sharp",
	});
}

export default Component;

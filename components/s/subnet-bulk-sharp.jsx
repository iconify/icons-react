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
		"content": `<style>.bqipfobsh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m12 5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ktv-e3hgx {
  d: path("M13 11a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0Zm-5.99 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm5 0a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Zm5 0a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="bqipfobsh"/><path class="ktv-e3hgx"/></g>`,
		"fallback": "coolicons:subnet-bulk-sharp",
	});
}

export default Component;

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

.k8y94cc3e {
  d: path("M21 3a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-3 4a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm1 4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}

.thj7n1o7v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 15a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Zm-5 6H9a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2");
}
</style><g class="cuyn6tgcc"><path class="thj7n1o7v"/><path class="k8y94cc3e"/></g>`,
		"fallback": "coolicons:tornado-bulk-sharp",
	});
}

export default Component;

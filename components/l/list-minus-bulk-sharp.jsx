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

.euw4ylplj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 14h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2");
}

.u-2brwj7e {
  d: path("M14 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm-4 5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="euw4ylplj"/><path class="u-2brwj7e"/></g>`,
		"fallback": "coolicons:list-minus-bulk-sharp",
	});
}

export default Component;

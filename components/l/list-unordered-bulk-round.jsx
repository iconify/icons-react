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
		"content": `<style>.b1jnfbfts {
  d: path("M19 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.q3rkgq6ia {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.01 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="q3rkgq6ia"/><path class="b1jnfbfts"/></g>`,
		"fallback": "coolicons:list-unordered-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

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

.dfgwsd1rs {
  d: path("M216 80v112H40V64h160a16 16 0 0 1 16 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p3l9yi4ex {
  d: path("m117.31 134l-72 64a8 8 0 1 1-10.63-12L100 128L34.69 70a8 8 0 1 1 10.63-12l72 64a8 8 0 0 1 0 12ZM216 184h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16");
}
</style><g class="cuyn6tgcc"><path class="dfgwsd1rs"/><path class="p3l9yi4ex"/></g>`,
		"fallback": "ph:terminal-duotone",
	});
}

export default Component;

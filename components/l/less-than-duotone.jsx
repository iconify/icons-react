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
		"content": `<style>.bmrhctbju {
  d: path("M200 56v144L48 128Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.mov-_xdxo {
  d: path("M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65");
}
</style><g class="cuyn6tgcc"><path class="bmrhctbju"/><path class="mov-_xdxo"/></g>`,
		"fallback": "ph:less-than-duotone",
	});
}

export default Component;

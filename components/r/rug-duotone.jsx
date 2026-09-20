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

.ito-wr5_a {
  d: path("M200 16a8 8 0 0 0-8 8v16h-32V24a8 8 0 0 0-16 0v16h-32V24a8 8 0 0 0-16 0v16H64V24a8 8 0 0 0-16 0v208a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0v-16h32v16a8 8 0 0 0 16 0V24a8 8 0 0 0-8-8m-8 184H64V56h128Zm-70.86-27.88a8 8 0 0 0 13.72 0l24-40a8 8 0 0 0 0-8.24l-24-40a8 8 0 0 0-13.72 0l-24 40a8 8 0 0 0 0 8.24Zm6.86-68.57L142.67 128L128 152.45L113.33 128Z");
}

.udi-sb2hv {
  d: path("M56 48v160h144V48Zm72 120l-24-40l24-40l24 40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="udi-sb2hv"/><path class="ito-wr5_a"/></g>`,
		"fallback": "ph:rug-duotone",
	});
}

export default Component;

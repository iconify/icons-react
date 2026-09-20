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
		"content": `<style>.bcptobbzw {
  d: path("M192 40v152H40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.qhi95kold {
  d: path("M195.06 32.61a8 8 0 0 0-8.72 1.73l-152 152A8 8 0 0 0 40 200h152a8 8 0 0 0 8-8V40a8 8 0 0 0-4.94-7.39M184 184H59.31L184 59.31Z");
}
</style><g class="cuyn6tgcc"><path class="bcptobbzw"/><path class="qhi95kold"/></g>`,
		"fallback": "ph:notches-duotone",
	});
}

export default Component;

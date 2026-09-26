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

.pqmzp41vs {
  d: path("M8.5 13.5C9.3284 13.5 10 12.8284 10 12C10 11.1716 9.3284 10.5 8.5 10.5C7.6716 10.5 7 11.1716 7 12C7 12.8284 7.6716 13.5 8.5 13.5Z");
}

.xt4iambkc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 23C20.5523 23 21 22.5523 21 22L21 2C21 1.4477 20.5523 1 20 1L4 1C3.4477 1 3 1.4477 3 2L3 22C3 22.5523 3.4477 23 4 23L20 23Z");
}
</style><g class="cuyn6tgcc"><path class="xt4iambkc"/><path class="pqmzp41vs"/></g>`,
		"fallback": "keyline-icons:tablet-vertical-sharp-duotone",
	});
}

export default Component;

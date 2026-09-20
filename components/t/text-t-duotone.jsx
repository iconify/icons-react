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

.ftduy_boz {
  d: path("M200 56v128a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zp7dm92jy {
  d: path("M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="ftduy_boz"/><path class="zp7dm92jy"/></g>`,
		"fallback": "ph:text-t-duotone",
	});
}

export default Component;

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

.np041-bwo {
  d: path("m224 104l-48 48V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pdy9_ab5l {
  d: path("m229.66 98.34l-48-48A8 8 0 0 0 168 56v40h-3a103.94 103.94 0 0 0-100.75 78a8 8 0 0 0 15.5 4A88 88 0 0 1 165 112h3v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M184 132.69V75.31L212.69 104ZM200 216a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v120h152a8 8 0 0 1 8 8");
}
</style><g class="cuyn6tgcc"><path class="np041-bwo"/><path class="pdy9_ab5l"/></g>`,
		"fallback": "ph:share-duotone",
	});
}

export default Component;

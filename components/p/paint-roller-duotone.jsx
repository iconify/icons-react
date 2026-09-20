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
		"content": `<style>.bx4a6zk9x {
  d: path("M232 88h-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v24H16a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-24h16v50l-100.4 28.65A16.07 16.07 0 0 0 120 198v34a8 8 0 0 0 16 0v-34l100.4-28.68A16.07 16.07 0 0 0 248 154v-50a16 16 0 0 0-16-16m-32 40H48V64h152z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ufy-_mbdq {
  d: path("M208 64v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="ufy-_mbdq"/><path class="bx4a6zk9x"/></g>`,
		"fallback": "ph:paint-roller-duotone",
	});
}

export default Component;

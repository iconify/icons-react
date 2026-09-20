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

.ek-_0pbeq {
  d: path("M208 40v56h-56v40h-48v40H48V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pqe85qrvv {
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-48 120h48v24h-88v-24Zm8-16v-24h40v24Zm40-88v48h-48a8 8 0 0 0-8 8v32h-40a8 8 0 0 0-8 8v32H56V40Zm0 176H56v-32h144z");
}
</style><g class="cuyn6tgcc"><path class="ek-_0pbeq"/><path class="pqe85qrvv"/></g>`,
		"fallback": "ph:stairs-duotone",
	});
}

export default Component;

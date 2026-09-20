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

.p6-wodb_m {
  d: path("M216 176v24a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-24a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8m-8-80H48a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-24a8 8 0 0 0-8-8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t2nbx65ge {
  d: path("M208 160H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160zm0-112H48a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16m0 40H48v-24h160zM96 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8");
}
</style><g class="cuyn6tgcc"><path class="p6-wodb_m"/><path class="t2nbx65ge"/></g>`,
		"fallback": "ph:rows-plus-top-duotone",
	});
}

export default Component;

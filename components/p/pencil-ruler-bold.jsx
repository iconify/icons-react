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
		"content": `<style>.yhh44qbfg {
  fill: currentColor;
  d: path("M208 28h-48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-40v-24h16a12 12 0 0 0 0-24h-16v-16h16a12 12 0 0 0 0-24h-16v-16h16a12 12 0 0 0 0-24h-16V52h40ZM80.49 23.51a12 12 0 0 0-17 0l-32 32A12 12 0 0 0 28 64v144a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V64a12 12 0 0 0-3.51-8.49ZM52 92h40v72H52Zm20-43l19 19H53ZM52 204v-16h40v16Z");
}
</style><path class="yhh44qbfg"/>`,
		"fallback": "ph:pencil-ruler-bold",
	});
}

export default Component;

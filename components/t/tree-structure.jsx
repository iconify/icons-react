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
		"content": `<style>.z5xc3wbdo {
  fill: currentColor;
  d: path("M160 112h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a24 24 0 0 0-24 24v32H72v-8a16 16 0 0 0-16-16H24a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h32v32a24 24 0 0 0 24 24h16v16a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16h-16a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h16v16a16 16 0 0 0 16 16M56 144H24v-32h32zm104 16h48v48h-48Zm0-112h48v48h-48Z");
}
</style><path class="z5xc3wbdo"/>`,
		"fallback": "ph:tree-structure",
	});
}

export default Component;

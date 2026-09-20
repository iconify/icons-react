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
		"content": `<style>.ctp5ribbz {
  fill: currentColor;
  d: path("M232 106h-26V54h26a6 6 0 0 0 0-12h-27.37A14 14 0 0 0 192 34h-16a14 14 0 0 0-12.63 8H144A102.12 102.12 0 0 0 42 144v19.37A14 14 0 0 0 34 176v16a14 14 0 0 0 8 12.63V232a6 6 0 0 0 12 0v-26h52v26a6 6 0 0 0 12 0v-27.37a14 14 0 0 0 8-12.63v-16a14 14 0 0 0-8-12.63V144a26 26 0 0 1 26-26h19.37a14 14 0 0 0 12.63 8h16a14 14 0 0 0 12.63-8H232a6 6 0 0 0 0-12m-120 68a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2Zm-6-30v18H54v-18a90.1 90.1 0 0 1 90-90h18v52h-18a38 38 0 0 0-38 38m86-30h-16a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v64a2 2 0 0 1-2 2");
}
</style><path class="ctp5ribbz"/>`,
		"fallback": "ph:pipe-light",
	});
}

export default Component;

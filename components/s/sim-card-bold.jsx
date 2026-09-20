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
		"content": `<style>.t60d_hb4t {
  fill: currentColor;
  d: path("m216.49 79.51l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49M196 212H60V44h87l49 49ZM88 112a12 12 0 0 0-12 12v60a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-60a12 12 0 0 0-12-12Zm12 24h16v36h-16Zm56 36h-16v-36h16Z");
}
</style><path class="t60d_hb4t"/>`,
		"fallback": "ph:sim-card-bold",
	});
}

export default Component;

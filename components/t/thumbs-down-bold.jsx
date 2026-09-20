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
		"content": `<style>.tfymltbvq {
  fill: currentColor;
  d: path("m243.78 156.53l-12-96A28 28 0 0 0 204 36H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h40.58l36.69 73.37A12 12 0 0 0 120 244a44.05 44.05 0 0 0 44-44v-12h52a28 28 0 0 0 27.78-31.47M68 140H36V60h32Zm151 22.65a4 4 0 0 1-3 1.35h-64a12 12 0 0 0-12 12v24a20 20 0 0 1-13.18 18.8L92 149.17V60h112a4 4 0 0 1 4 3.5l12 96a4 4 0 0 1-1 3.15");
}
</style><path class="tfymltbvq"/>`,
		"fallback": "ph:thumbs-down-bold",
	});
}

export default Component;

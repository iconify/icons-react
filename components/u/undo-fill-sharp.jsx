import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.btdhc-bgq {
  fill: currentColor;
  d: path("M5.001 10H5a.997.997 0 0 1-1-1V3a1 1 0 0 1 2 0v2.817a8.616 8.616 0 1 1-1.919 9.577a.999.999 0 1 1 1.838-.788a6.614 6.614 0 0 0 7.334 3.888A6.616 6.616 0 1 0 6.729 8H11a1 1 0 0 1 0 2Z");
}
</style><path class="btdhc-bgq"/>`,
		"fallback": "coolicons:undo-fill-sharp",
	});
}

export default Component;

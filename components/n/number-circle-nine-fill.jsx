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
		"content": `<style>.z1pcly0jx {
  fill: currentColor;
  d: path("M145.33 118A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-86-51.18A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11a8 8 0 0 0 11-2.77L159.18 126A36.05 36.05 0 0 0 146 76.82");
}
</style><path class="z1pcly0jx"/>`,
		"fallback": "ph:number-circle-nine-fill",
	});
}

export default Component;

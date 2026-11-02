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
		"content": `<style>.th64kwpje {
  fill: currentColor;
  d: path("M7 9v6a5 5 0 1 0 10 0a1 1 0 0 1 2 0a7 7 0 1 1-14 0V9a7 7 0 1 1 14 0a1 1 0 0 1-2 0A5 5 0 1 0 7 9");
}
</style><path class="th64kwpje"/>`,
		"fallback": "coolicons:letter-c-bulk-round",
	});
}

export default Component;

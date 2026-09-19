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
		"content": `<style>.xjoh4447g {
  fill: currentColor;
  d: path("M6 21h12V7H6zm6-11l4 4h-2v4h-4v-4H8zm3.5-6l-1-1h-5l-1 1H5v2h14V4z");
}
</style><path class="xjoh4447g"/>`,
		"fallback": "ic:sharp-restore-from-trash",
	});
}

export default Component;

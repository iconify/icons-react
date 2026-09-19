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
		"content": `<style>.bj9lmobkz {
  fill: currentColor;
  d: path("M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z");
}
</style><path class="bj9lmobkz"/>`,
		"fallback": "ic:twotone-clear-all",
	});
}

export default Component;

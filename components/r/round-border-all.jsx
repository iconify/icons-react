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
		"content": `<style>.v2tzcybje {
  fill: currentColor;
  d: path("M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m8 14H6c-.55 0-1-.45-1-1v-5h5c.55 0 1 .45 1 1zm-1-8H5V6c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m8 8h-5v-5c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m1-8h-5c-.55 0-1-.45-1-1V5h5c.55 0 1 .45 1 1z");
}
</style><path class="v2tzcybje"/>`,
		"fallback": "ic:round-border-all",
	});
}

export default Component;

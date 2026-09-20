import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sn6wtoh4z {
  fill: currentColor;
  d: path("M16 8a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4zm1 2a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h12a1 1 0 0 0 1-1M8 2a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4zm1 2a1 1 0 0 0-1-1H4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1m5 12a2 2 0 0 0-2-2H4a2 2 0 1 0 0 4h8a2 2 0 0 0 2-2m-2-1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z");
}
</style><path class="sn6wtoh4z"/>`,
		"fallback": "fluent:poll-horizontal-20-regular",
	});
}

export default Component;

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
		"content": `<style>.obko32bhm {
  fill: currentColor;
  d: path("M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1");
}
</style><path class="obko32bhm"/>`,
		"fallback": "ic:round-web-asset",
	});
}

export default Component;

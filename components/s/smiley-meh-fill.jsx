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
		"content": `<style>.n6sm44bua {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m76 72H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m-4-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="n6sm44bua"/>`,
		"fallback": "ph:smiley-meh-fill",
	});
}

export default Component;

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
		"content": `<style>.e366gp1dr {
  fill: currentColor;
  d: path("M184 56v144a24 24 0 0 1-24 24H96a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24m24 24a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m32 16a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8M48 80a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8M16 96a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8");
}
</style><path class="e366gp1dr"/>`,
		"fallback": "ph:vibrate-fill",
	});
}

export default Component;

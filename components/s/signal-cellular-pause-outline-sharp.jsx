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
		"content": `<style>.d0_t3qb1t {
  fill: currentColor;
  d: path("M2 22L22 2v11h-2V6.825L6.825 20H13v2zm13 0v-7h2v7zm4 0v-7h2v7zm-5.575-8.6");
}
</style><path class="d0_t3qb1t"/>`,
		"fallback": "material-symbols:signal-cellular-pause-outline-sharp",
	});
}

export default Component;

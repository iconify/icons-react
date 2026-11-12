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
		"content": `<style>.hmofhe2dp {
  fill: currentColor;
  d: path("M7 2h10a3 3 0 0 1 3 3v6h1a1 1 0 0 1 0 2h-1v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6H3a1 1 0 0 1 0-2h1V5a3 3 0 0 1 3-3m6.8 6.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 11h-2Z");
}
</style><path class="hmofhe2dp"/>`,
		"fallback": "coolicons:meter-electricity-fill",
	});
}

export default Component;

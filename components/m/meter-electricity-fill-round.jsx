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
		"content": `<style>.b8-c2ac1f {
  fill: currentColor;
  d: path("M9 2h6a5 5 0 0 1 5 5v4h1a1 1 0 0 1 0 2h-1v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5v-4H3a1 1 0 0 1 0-2h1V7a5 5 0 0 1 5-5m4.8 6.6a1 1 0 0 0-1.6-1.2l-3 4A.999.999 0 0 0 10 13h2l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4A.999.999 0 0 0 14 11h-2Z");
}
</style><path class="b8-c2ac1f"/>`,
		"fallback": "coolicons:meter-electricity-fill-round",
	});
}

export default Component;

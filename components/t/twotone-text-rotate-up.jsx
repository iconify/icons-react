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
		"content": `<style>.epxcdol0p {
  fill: currentColor;
  d: path("m18 4l-3 3h2v13h2V7h2zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1zM4.98 13L10 11.13v3.74z");
}
</style><path class="epxcdol0p"/>`,
		"fallback": "ic:twotone-text-rotate-up",
	});
}

export default Component;

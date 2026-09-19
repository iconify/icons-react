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
		"content": `<style>.vt6p5gmed {
  fill: currentColor;
  d: path("M21 3h-3V1h-2v2H8V1H6v2H3v18h18zm-9 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1z");
}
</style><path class="vt6p5gmed"/>`,
		"fallback": "ic:sharp-perm-contact-calendar",
	});
}

export default Component;

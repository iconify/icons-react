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
		"content": `<style>.h8_5kb0hl {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 11.5h.25V19h-4.5v-4.5H10c.55 0 1-.45 1-1V5h2v8.5c0 .55.45 1 1 1M5 5h2v8.5c0 .55.45 1 1 1h.25V19H5zm14 14h-3.25v-4.5H16c.55 0 1-.45 1-1V5h2z");
}
</style><path class="h8_5kb0hl"/>`,
		"fallback": "ic:outline-piano",
	});
}

export default Component;

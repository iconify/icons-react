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
		"content": `<style>.m7ufbvnpx {
  fill: currentColor;
  d: path("M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2S2 6.48 2 12s4.48 10 10 10m0-18c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9L7.1 5.69A7.9 7.9 0 0 1 12 4M5.69 7.1L16.9 18.31A7.9 7.9 0 0 1 12 20c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9");
}
</style><path class="m7ufbvnpx"/>`,
		"fallback": "ic:twotone-not-interested",
	});
}

export default Component;

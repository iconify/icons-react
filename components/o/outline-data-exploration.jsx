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
		"content": `<style>.rhpuf_b1x {
  fill: currentColor;
  d: path("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10m0 18c-2.89 0-5.43-1.54-6.83-3.84l2.95-2.95L11.41 16L16 11.42V13h2V8h-5v2h1.58l-3.28 3.28L8 10.5l-3.69 3.7C4.11 13.5 4 12.76 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m7.5.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="rhpuf_b1x"/>`,
		"fallback": "ic:outline-data-exploration",
	});
}

export default Component;

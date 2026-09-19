import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.izoyffb1m {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M18 24h28v10l16-16L46 2v10H18V2L2 18l16 16zm2 16c-3.3 0-6 2.8-6 6.3v9.3c0 3.5 2.7 6.3 6 6.3s6-2.8 6-6.3v-9.3c0-3.5-2.7-6.3-6-6.3m3 15.7c0 1.6-1.3 3-3 3s-3-1.3-3-3v-9.3c0-1.6 1.3-3 3-3s3 1.3 3 3zm16-1.4L33.2 40H30v22h3V47.7L38.8 62H42V40h-3zm7 3.7h4v4h-4zm.7-4h2.6l.7-14h-4z");
}
</style><path class="izoyffb1m"/>`,
		"fallback": "emojione:on-arrow",
	});
}

export default Component;

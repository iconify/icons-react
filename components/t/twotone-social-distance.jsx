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
		"content": `<style>.lkb58dkzc {
  fill: currentColor;
  d: path("M4 5c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M18 7c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2.78 1.58a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 10.43V11h8v-.57c0-.81-.48-1.53-1.22-1.85M22 17l-4-4v3H6v-3l-4 4l4 4v-3h12v3z");
}
</style><path class="lkb58dkzc"/>`,
		"fallback": "ic:twotone-social-distance",
	});
}

export default Component;

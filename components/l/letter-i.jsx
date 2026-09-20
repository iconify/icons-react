import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r1szqyahq {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M76.32 16.27H51.68c-1.29 0-2.33 1.05-2.33 2.33v99.96c0 1.29 1.04 2.33 2.33 2.33h24.64c1.29 0 2.33-1.04 2.33-2.33V18.6c0-1.28-1.04-2.33-2.33-2.33");
}
</style><path class="r1szqyahq"/>`,
		"fallback": "noto:letter-i",
	});
}

export default Component;

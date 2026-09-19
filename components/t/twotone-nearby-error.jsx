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
		"content": `<style>.zlz_l_b8p {
  fill: currentColor;
  d: path("m12 7.57l4.42 4.42L12 16.41l-4.42-4.42zm0 11.62l-7.2-7.2l7.2-7.2l6 6V7.16l-4.58-4.58c-.78-.78-2.05-.78-2.83 0l-8.01 8c-.78.78-.78 2.05 0 2.83l8.01 8c.78.78 2.05.78 2.83 0L18 16.82v-3.63zm8 .81h2v2h-2zm2-10h-2v8h2z");
}
</style><path class="zlz_l_b8p"/>`,
		"fallback": "ic:twotone-nearby-error",
	});
}

export default Component;

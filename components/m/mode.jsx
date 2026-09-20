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
		"content": `<style>.njm0qxbux {
  fill: var(--svg-color--dffe00, #dffe00);
  d: path("M20.984 19.963h-3.511v-7.938l1.406-4.527l-.998-.355l-4.553 12.82h-2.672L6.1 7.143l-.994.355l1.405 4.527v7.941H3V4.034h5.227l3.243 9.118v2.68h1.06v-2.68l3.243-9.118H21v15.93z");
}
</style><path class="njm0qxbux"/>`,
		"fallback": "token-branded:mode",
	});
}

export default Component;

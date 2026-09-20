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
		"content": `<style>.s1h0hhzfp {
  fill: var(--svg-color--ff1826, #ff1826);
  d: path("M3 16.5h13.5V3H21v18H3zM3 3h4.5v7.072H3zm6.429 0h4.5v7.072h-4.5z");
}
</style><path class="s1h0hhzfp"/>`,
		"fallback": "token-branded:mtd",
	});
}

export default Component;

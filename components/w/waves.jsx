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
		"content": `<style>.sycvawb1d {
  fill: var(--svg-color--1857f5, #1857f5);
  d: path("m3 12l9-9l9 9l-9 9z");
}
</style><path class="sycvawb1d"/>`,
		"fallback": "token-branded:waves",
	});
}

export default Component;

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
		"content": `<style>.qbnz7ccgm {
  fill: var(--svg-color--1a5aff, #1a5aff);
  fill-rule: evenodd;
  d: path("M13.333 9.606H10.46l-4.547 7.99L3 15.94l4.754-8.355a2.63 2.63 0 0 1 2.288-1.33h3.29zM7.116 6.255h-3.83v3.83a3.83 3.83 0 0 0 3.83-3.83M15.2 7.588a2.63 2.63 0 0 1 2.29-1.333H21v3.351h-3.092l-3.864 6.806a2.63 2.63 0 0 1-2.29 1.333H8.073v-3.351h3.264zm3.885 8.242a1.915 1.915 0 1 0 0-3.83a1.915 1.915 0 0 0 0 3.83");
}
</style><path clip-rule="evenodd" class="qbnz7ccgm"/>`,
		"fallback": "token-branded:tru",
	});
}

export default Component;

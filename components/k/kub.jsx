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
		"content": `<style>.dhv0-r68y {
  fill: var(--svg-color--4cba64, #4cba64);
  d: path("M14.925 6.717a1.8 1.8 0 0 1 .373-.567L21 11.762l-5.715 6.075l-4.09-4.185a1.68 1.68 0 0 1 1.863-.377c.208.088.396.216.553.377l1.678 1.714l3.294-3.6l-3.284-3.14a1.755 1.755 0 0 1-.37-1.909zm1.575 5.058a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M8.701 17.85a1.773 1.773 0 0 0 0-2.475l-3.285-3.577l3.299-3.164l1.674 1.715a1.7 1.7 0 0 0 1.206.513c.454 0 .855-.306 1.17-.635L8.715 6.16L3 11.798zm1.049-6.075a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0");
}
</style><path class="dhv0-r68y"/>`,
		"fallback": "token-branded:kub",
	});
}

export default Component;

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
		"content": `<style>.ttuifqhjm {
  fill: var(--svg-color--1b5aff, #1b5aff);
  d: path("M9 3H3v6a6 6 0 0 0 6-6m0 18V8.994C9 5.682 11.478 3 14.844 3H21v6h-6v12z");
}
</style><path class="ttuifqhjm"/>`,
		"fallback": "token-branded:tusd",
	});
}

export default Component;

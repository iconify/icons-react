import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q5mjxeb7m {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-19.42 94.71a8 8 0 1 1-13 9.41L184 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5l-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 0 1 5 15.21l-12.36 4Zm-72 0a8 8 0 1 1-13 9.41L112 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5l-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 1 1 5 15.21l-12.36 4ZM64 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0");
}
</style><path class="q5mjxeb7m"/>`,
		"fallback": "ph:password-fill",
	});
}

export default Component;

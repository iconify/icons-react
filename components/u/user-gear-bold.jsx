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
		"content": `<style>.hh4xt_b9z {
  fill: currentColor;
  d: path("M148.5 156.53a72 72 0 1 0-89 0a124 124 0 0 0-48.69 35.75a12 12 0 0 0 18.38 15.44C48.54 184.69 75.11 172 104 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44a124 124 0 0 0-48.69-35.75M56 100a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m190.53 40l-7.11 2.31l4.39 6.05a12 12 0 1 1-19.41 14.11l-4.4-6.06l-4.4 6.06a12 12 0 1 1-19.41-14.11l4.39-6.05l-7.11-2.31a12 12 0 1 1 7.41-22.83l7.12 2.31V112a12 12 0 0 1 24 0v7.48l7.12-2.31a12 12 0 1 1 7.41 22.83");
}
</style><path class="hh4xt_b9z"/>`,
		"fallback": "ph:user-gear-bold",
	});
}

export default Component;

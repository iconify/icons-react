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
		"content": `<style>.p-iuq7byw {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m0-144c-28.26 0-48 24.67-48 60s19.74 60 48 60s48-24.67 48-60s-19.74-60-48-60m0 96c-23.33 0-24-32.32-24-36s.67-36 24-36s24 32.32 24 36s-.67 36-24 36");
}
</style><path class="p-iuq7byw"/>`,
		"fallback": "ph:number-circle-zero-bold",
	});
}

export default Component;

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
		"content": `<style>.a3pvbjb1o {
  fill: currentColor;
  d: path("M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M92 200a12 12 0 1 1 24 0v11.11a83.8 83.8 0 0 1-24-7.22Zm48 0a12 12 0 1 1 24 0v3.89a83.8 83.8 0 0 1-24 7.22Zm-33.86-52h43.72l7.57 16.42a35.95 35.95 0 0 0-29.43 8.8a35.95 35.95 0 0 0-29.43-8.79Zm11.08-24L128 100.62L138.78 124ZM188 186.79V176a12.15 12.15 0 0 0-1.1-5l-48-104a12 12 0 0 0-21.8 0l-48 104a12.15 12.15 0 0 0-1.1 5v10.77a84 84 0 1 1 120 0Z");
}
</style><path class="a3pvbjb1o"/>`,
		"fallback": "ph:pencil-circle-bold",
	});
}

export default Component;

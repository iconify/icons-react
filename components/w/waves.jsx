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
		"content": `<style>.utg690byf {
  fill: currentColor;
  d: path("M222.16 177.25a8 8 0 0 1-1 11.25c-17.36 14.39-32.86 19.5-47 19.5c-18.58 0-34.82-8.82-49.93-17c-25.35-13.76-47.24-25.64-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.28 70.32-16.92 96.93-2.48c25.35 13.75 47.24 25.63 79.07-.74a8 8 0 0 1 11.22 1.04m-11.27-57c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.43-56.76-30.79-96.93 2.49a8 8 0 0 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.19 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31ZM45.11 79.8c31.83-26.37 53.72-14.49 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.12 47-19.5a8 8 0 1 0-10.22-12.31c-31.83 26.38-53.72 14.5-79.07.74c-26.61-14.41-56.76-30.77-96.93 2.51a8 8 0 1 0 10.22 12.3");
}
</style><path class="utg690byf"/>`,
		"fallback": "ph:waves",
	});
}

export default Component;

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
		"content": `<style>.scqqwab3k {
  fill: currentColor;
  d: path("M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-3-9h-3l-1.17 3.5H17V22zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5M5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m2 16v-7H9V7H2v8h1.5v7zm6.5 0v-4h1v-5.5h-5V18h1v4z");
}
</style><path class="scqqwab3k"/>`,
		"fallback": "ic:sharp-family-restroom",
	});
}

export default Component;

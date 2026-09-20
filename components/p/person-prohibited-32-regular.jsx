import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jtj5ibb7g {
  fill: currentColor;
  d: path("M21 9A7 7 0 1 1 7 9a7 7 0 0 1 14 0m-2 0A5 5 0 1 0 9 9a5 5 0 0 0 10 0M5.5 18A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C7.859 29.177 10.802 30 14 30c1.047 0 2.067-.088 3.04-.255a9 9 0 0 1-1.568-1.81q-.72.064-1.472.065c-2.877 0-5.434-.744-7.241-1.894C4.939 24.95 4 23.472 4 22v-.5A1.5 1.5 0 0 1 5.5 20h9.012a9 9 0 0 1 1.004-2zM23 30.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m0-2a5.5 5.5 0 0 1-3.117-.968l7.649-7.65A5.5 5.5 0 0 1 23 28.5m3.118-10.032l-7.65 7.65a5.5 5.5 0 0 1 7.65-7.65");
}
</style><path class="jtj5ibb7g"/>`,
		"fallback": "fluent:person-prohibited-32-regular",
	});
}

export default Component;

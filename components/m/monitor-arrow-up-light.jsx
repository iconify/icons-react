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
		"content": `<style>.jlerdhm8h {
  fill: currentColor;
  d: path("M208 42H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V64a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V64a10 10 0 0 1 10-10h160a10 10 0 0 1 10 10Zm-52 48a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-9.76-116.24a6 6 0 1 1-8.48 8.48L134 102.49V152a6 6 0 0 1-12 0v-49.51l-13.76 13.75a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 0Z");
}
</style><path class="jlerdhm8h"/>`,
		"fallback": "ph:monitor-arrow-up-light",
	});
}

export default Component;

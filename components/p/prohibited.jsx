import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f_p5jjbvc {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18s18-8.059 18-18S27.941 0 18 0m13 18c0 2.565-.753 4.95-2.035 6.965L11.036 7.036A12.9 12.9 0 0 1 18 5c7.18 0 13 5.821 13 13M5 18c0-2.565.753-4.95 2.036-6.964l17.929 17.929A12.93 12.93 0 0 1 18 31c-7.179 0-13-5.82-13-13");
}
</style><path class="f_p5jjbvc"/>`,
		"fallback": "twemoji:prohibited",
	});
}

export default Component;

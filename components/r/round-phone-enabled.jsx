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
		"content": `<style>.pk_mg3bmj {
  fill: currentColor;
  d: path("m4.78 15.27l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07c-.53 8.54-7.36 15.36-15.89 15.89c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98");
}
</style><path class="pk_mg3bmj"/>`,
		"fallback": "ic:round-phone-enabled",
	});
}

export default Component;

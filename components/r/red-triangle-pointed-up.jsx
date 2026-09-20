import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dwfwd9iki {
  fill: var(--svg-color--db4437, #db4437);
  d: path("M124.81 114.25H3.19c-1.09 0-2.09-.6-2.61-1.55c-.53-.95-.48-2.11.11-3.03L61.5 15.03c1.1-1.7 3.91-1.7 5.01 0l60.81 94.63c.59.92.63 2.08.11 3.03c-.53.96-1.53 1.56-2.62 1.56");
}
</style><path class="dwfwd9iki"/>`,
		"fallback": "noto-v1:red-triangle-pointed-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qo-umm-8i {
  fill: var(--svg-color--ff5a79, #ff5a79);
  d: path("M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m22 30c0 4.6-1.4 8.9-3.9 12.5L19.5 13.9C23.1 11.4 27.4 10 32 10c12.2 0 22 9.9 22 22m-44 0c0-4.6 1.4-8.9 3.9-12.5l30.6 30.6C40.9 52.6 36.6 54 32 54c-12.1 0-22-9.9-22-22");
}
</style><path class="qo-umm-8i"/>`,
		"fallback": "emojione:prohibited",
	});
}

export default Component;

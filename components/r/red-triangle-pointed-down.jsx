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
		"content": `<style>.rd1eusbus {
  fill: var(--svg-color--db4437, #db4437);
  d: path("M64 115.58c-1.01 0-1.96-.51-2.5-1.37L.69 19.58C.1 18.67.06 17.5.58 16.55A2.96 2.96 0 0 1 3.19 15h121.62c1.09 0 2.09.59 2.61 1.55c.52.95.48 2.12-.11 3.03L66.5 114.22c-.54.85-1.49 1.36-2.5 1.36");
}
</style><path class="rd1eusbus"/>`,
		"fallback": "noto-v1:red-triangle-pointed-down",
	});
}

export default Component;

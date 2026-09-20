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
		"content": `<style>.e6-inebgr {
  fill: var(--svg-color--ff9800, #ff9800);
  d: path("M64 92.16c-.68 0-1.37-.26-1.89-.78L36.6 65.87a2.67 2.67 0 0 1 0-3.77l25.51-25.52c1-.99 2.77-1 3.77 0L91.4 62.1c.5.5.78 1.17.78 1.88s-.28 1.38-.78 1.88L65.88 91.38c-.52.52-1.2.78-1.88.78");
}
</style><path class="e6-inebgr"/>`,
		"fallback": "noto-v1:small-orange-diamond",
	});
}

export default Component;

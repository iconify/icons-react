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
		"content": `<style>.t8lcadbmq {
  fill: currentColor;
  d: path("M128 12a68.07 68.07 0 0 0-68 68v96a12 12 0 0 0 12 12h36v44a20 20 0 0 0 40 0v-44h36a12 12 0 0 0 12-12V80a68.07 68.07 0 0 0-68-68m12 220a12 12 0 0 1-24 0v-44h24Zm48-56a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V80a60 60 0 0 1 120 0ZM116 72v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0m32 0v80a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0");
}
</style><path class="t8lcadbmq"/>`,
		"fallback": "ph:popsicle-thin",
	});
}

export default Component;

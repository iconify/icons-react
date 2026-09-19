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
		"content": `<style>.ep3is9lch {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("M32 2L2 62h60z");
}
</style><path class="ep3is9lch"/>`,
		"fallback": "emojione:red-triangle-pointed-up",
	});
}

export default Component;

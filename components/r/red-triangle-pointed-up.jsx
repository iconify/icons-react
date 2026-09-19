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
		"content": `<style>.o0m1bxb5n {
  fill: currentColor;
  d: path("M32 2L2 62h60z");
}
</style><path class="o0m1bxb5n"/>`,
		"fallback": "emojione-monotone:red-triangle-pointed-up",
	});
}

export default Component;

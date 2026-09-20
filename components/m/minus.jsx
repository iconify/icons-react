import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ng2939b1r {
  fill: currentColor;
  d: path("M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><path class="ng2939b1r"/>`,
		"fallback": "pepicons-pop:minus",
	});
}

export default Component;

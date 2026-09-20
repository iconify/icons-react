import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p_lqh2b0i {
  fill: currentColor;
  d: path("M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0M9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5M7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84");
}
</style><path class="p_lqh2b0i"/>`,
		"fallback": "fluent:presence-blocked-10-regular",
	});
}

export default Component;

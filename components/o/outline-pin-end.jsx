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
		"content": `<style>.jbtvfqb8r {
  fill: currentColor;
  d: path("M20 12V6H4v12h10v2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-4.34-6H9v5.66h2v-2.24l2.95 2.95l1.41-1.41L12.41 10h2.24V8z");
}
</style><path class="jbtvfqb8r"/>`,
		"fallback": "ic:outline-pin-end",
	});
}

export default Component;

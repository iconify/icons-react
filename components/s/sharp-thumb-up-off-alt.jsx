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
		"content": `<style>.r-_l2mv4n {
  fill: currentColor;
  d: path("M14.17 1L7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z");
}
</style><path class="r-_l2mv4n"/>`,
		"fallback": "ic:sharp-thumb-up-off-alt",
	});
}

export default Component;

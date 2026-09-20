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
		"content": `<style>.wuwhwgb-w {
  fill: currentColor;
  d: path("m17.35 19.289l-2.813-2.839l.688-.688l2.125 2.125l4.25-4.25l.688.713zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616V11.5h-1V4.616q0-.231-.192-.424T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03L5.65 16h6.85v1H6.077zM4 16v1.385V4z");
}
</style><path class="wuwhwgb-w"/>`,
		"fallback": "material-symbols-light:mark-chat-read-outline",
	});
}

export default Component;

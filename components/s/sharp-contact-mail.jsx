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
		"content": `<style>.wv10-1pkt {
  fill: currentColor;
  d: path("M21 8V7l-3 2l-3-2v1l3 2zm3-5H0v18h23.99zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1zm8-6h-8V6h8z");
}
</style><path class="wv10-1pkt"/>`,
		"fallback": "ic:sharp-contact-mail",
	});
}

export default Component;

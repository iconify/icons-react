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
		"content": `<style>.nqrxnybto {
  fill: currentColor;
  d: path("M22 4H2v16h20zM8.5 15H7.3l-2.55-3.5V15H3.5V9h1.25l2.5 3.5V9H8.5zm5-4.74H11v1.12h2.5v1.26H11v1.11h2.5V15h-4V9h4zm7 4.74h-6V9h1.25v4.51h1.13V9.99h1.25v3.51h1.12V9h1.25z");
}
</style><path class="nqrxnybto"/>`,
		"fallback": "ic:sharp-fiber-new",
	});
}

export default Component;

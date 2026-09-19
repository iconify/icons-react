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
		"content": `<style>.oetsx1bww {
  fill: currentColor;
  d: path("M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5zm9 12h-8v2h10V3H12v2h8z");
}
</style><path class="oetsx1bww"/>`,
		"fallback": "ic:sharp-login",
	});
}

export default Component;

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
		"content": `<style>.p2zcctxap {
  fill: currentColor;
  d: path("M22 4H2v16h20zm-6.25 10.09L4 11.22V10h16v.53zM4 6h16v2H4z");
}
</style><path class="p2zcctxap"/>`,
		"fallback": "ic:sharp-wallet",
	});
}

export default Component;

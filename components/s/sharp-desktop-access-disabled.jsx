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
		"content": `<style>.nsk1v0bil {
  fill: currentColor;
  d: path("M1.41 1.69L0 3.1l1 .99V18h9v2H8v2h8v-2h-2v-2h.9l6 6l1.41-1.41zM2.99 16V6.09L12.9 16zM4.55 2l2 2H21v12h-2.45l2 2h2.44V2z");
}
</style><path class="nsk1v0bil"/>`,
		"fallback": "ic:sharp-desktop-access-disabled",
	});
}

export default Component;

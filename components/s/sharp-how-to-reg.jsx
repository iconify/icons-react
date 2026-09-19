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
		"content": `<style>.nq340vdfx {
  fill: currentColor;
  d: path("m9 17l3-2.94a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m4.47 8.5L12 17l1.4-1.41l2.07 2.08l5.13-5.17l1.4 1.41z");
}
</style><path class="nq340vdfx"/>`,
		"fallback": "ic:sharp-how-to-reg",
	});
}

export default Component;

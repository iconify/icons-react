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
		"content": `<style>.r4-p3dtll {
  fill: currentColor;
  d: path("M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2a9 9 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2zm15.6-5.5l-5.13 5.17l-2.07-2.08L12 17l3.47 3.5L22 13.91z");
}
</style><path class="r4-p3dtll"/>`,
		"fallback": "ic:outline-how-to-reg",
	});
}

export default Component;

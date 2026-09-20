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
		"content": `<style>.ln4qfpd7o {
  fill: currentColor;
  d: path("M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm12.414 0H19a2 2 0 1 0 0-4H3a1 1 0 1 1 0-2h16a4 4 0 0 1 0 8h-3.586l.293.293a1 1 0 0 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 1.414z");
}
</style><path class="ln4qfpd7o"/>`,
		"fallback": "fluent:text-wrap-24-filled",
	});
}

export default Component;

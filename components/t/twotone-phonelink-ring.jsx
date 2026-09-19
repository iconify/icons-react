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
		"content": `<style>.w4xdj_4_t {
  fill: currentColor;
  d: path("M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 19H4V4h10zm6.1-12.3l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M17 10.8c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3z");
}

.x06ohzb0c {
  fill: currentColor;
  d: path("M4 4h10v16H4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x06ohzb0c"/><path class="w4xdj_4_t"/>`,
		"fallback": "ic:twotone-phonelink-ring",
	});
}

export default Component;

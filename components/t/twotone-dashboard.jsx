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
		"content": `<style>.actm2y3mi {
  fill: currentColor;
  d: path("M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.m7g0mh6ta {
  fill: currentColor;
  d: path("M3 13h8V3H3zm2-8h4v6H5zm8 16h8V11h-8zm2-8h4v6h-4zM13 3v6h8V3zm6 4h-4V5h4zM3 21h8v-6H3zm2-4h4v2H5z");
}
</style><path class="actm2y3mi"/><path class="m7g0mh6ta"/>`,
		"fallback": "ic:twotone-dashboard",
	});
}

export default Component;

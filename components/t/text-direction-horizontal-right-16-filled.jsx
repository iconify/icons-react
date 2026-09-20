import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rad_5bc5u {
  fill: currentColor;
  d: path("M10.72 9.22a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72H2.75a.75.75 0 0 1 0-1.5h8.69l-.72-.72a.75.75 0 0 1 0-1.06M5 2a.75.75 0 0 1 .702.486l2.25 6a.75.75 0 0 1-1.404.528L5.98 7.5H4.02l-.568 1.514a.75.75 0 0 1-1.404-.528l2.25-6l.049-.104A.75.75 0 0 1 5 2m5.72.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l.72-.72H8.75a.75.75 0 0 1 0-1.5h2.69l-.72-.72a.75.75 0 0 1 0-1.06M4.582 6h.836L5 4.886z");
}
</style><path class="rad_5bc5u"/>`,
		"fallback": "fluent:text-direction-horizontal-right-16-filled",
	});
}

export default Component;

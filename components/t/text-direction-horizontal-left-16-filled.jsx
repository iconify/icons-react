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
		"content": `<style>.h-tje8pdw {
  fill: currentColor;
  d: path("M4.22 9.22a.75.75 0 1 1 1.06 1.06l-.72.72h8.69a.75.75 0 0 1 0 1.5H4.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zM11 2a.75.75 0 0 1 .702.486l2.25 6a.75.75 0 0 1-1.404.528L11.98 7.5h-1.96l-.568 1.514a.75.75 0 0 1-1.404-.528l2.25-6l.049-.104A.75.75 0 0 1 11 2m-6.78.72a.75.75 0 1 1 1.06 1.06l-.72.72h2.69a.75.75 0 0 1 0 1.5H4.56l.72.72a.75.75 0 0 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zM10.582 6h.836L11 4.886z");
}
</style><path class="h-tje8pdw"/>`,
		"fallback": "fluent:text-direction-horizontal-left-16-filled",
	});
}

export default Component;

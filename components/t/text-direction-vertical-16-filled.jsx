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
		"content": `<style>.frsx-acon {
  fill: currentColor;
  d: path("M4.75 2a.75.75 0 0 1 .75.75v8.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V2.75A.75.75 0 0 1 4.75 2m6.5 7.5a.75.75 0 0 1 .75.75v1.19l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-1.19a.75.75 0 0 1 .75-.75m0-7.5a.75.75 0 0 1 .702.486l2.25 6a.75.75 0 0 1-1.404.528L12.23 7.5h-1.96l-.568 1.514a.75.75 0 0 1-1.404-.528l2.25-6l.049-.104A.75.75 0 0 1 11.25 2m-.418 4h.836l-.418-1.114z");
}
</style><path class="frsx-acon"/>`,
		"fallback": "fluent:text-direction-vertical-16-filled",
	});
}

export default Component;

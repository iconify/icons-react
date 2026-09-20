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
		"content": `<style>.nspbyt1xm {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 8.5h10v3a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5zm10-1H8V3h3.5A1.5 1.5 0 0 1 13 4.5z");
}
</style><path class="nspbyt1xm"/>`,
		"fallback": "fluent:layout-row-two-split-top-focus-top-left-16-filled",
	});
}

export default Component;

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
		"content": `<style>.kpmex_b5p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.05 17.58l-.01.01l-2.4-2.4l1.06-1.06l1.35 1.35L16.54 13l1.06 1.06l-3.54 3.54zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M7.34 6.28l1.41 1.41l1.41-1.41l1.06 1.06l-1.41 1.41l1.41 1.41l-1.06 1.06l-1.41-1.41l-1.41 1.41l-1.06-1.06l1.41-1.41l-1.41-1.41zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8");
}
</style><path class="kpmex_b5p"/>`,
		"fallback": "ic:outline-flaky",
	});
}

export default Component;

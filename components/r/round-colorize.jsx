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
		"content": `<style>.rplgvbcwj {
  fill: currentColor;
  d: path("m20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-3.12 3.12l-1.23-1.21c-.39-.39-1.02-.38-1.41 0a.996.996 0 0 0 0 1.41l.72.72l-8.77 8.77q-.15.15-.15.36v4.04c0 .28.22.5.5.5h4.04c.13 0 .26-.05.35-.15l8.77-8.77l.72.72a.996.996 0 1 0 1.41-1.41l-1.22-1.22l3.12-3.12a.99.99 0 0 0 .02-1.42M6.92 19L5 17.08l8.06-8.06l1.92 1.92z");
}
</style><path class="rplgvbcwj"/>`,
		"fallback": "ic:round-colorize",
	});
}

export default Component;

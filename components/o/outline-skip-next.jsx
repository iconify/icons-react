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
		"content": `<style>.c1x6nphmt {
  fill: currentColor;
  d: path("m6 18l8.5-6L6 6zm2-8.14L11.03 12L8 14.14zM16 6h2v12h-2z");
}
</style><path class="c1x6nphmt"/>`,
		"fallback": "ic:outline-skip-next",
	});
}

export default Component;

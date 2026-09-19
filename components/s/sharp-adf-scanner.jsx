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
		"content": `<style>.fcqnl41jf {
  fill: currentColor;
  d: path("M22 12h-4V4H6v8H2v8h20zm-6 0H8V6h8zm2 5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1");
}
</style><path class="fcqnl41jf"/>`,
		"fallback": "ic:sharp-adf-scanner",
	});
}

export default Component;

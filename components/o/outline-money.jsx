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
		"content": `<style>.s2ttqac1o {
  fill: currentColor;
  d: path("M15 16h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1m1-6h1v4h-1zm-7 6h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1m1-6h1v4h-1zM5 8h2v8H5zM2 4v16h20V4zm18 14H4V6h16z");
}
</style><path class="s2ttqac1o"/>`,
		"fallback": "ic:outline-money",
	});
}

export default Component;

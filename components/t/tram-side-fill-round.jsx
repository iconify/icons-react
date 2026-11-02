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
		"content": `<style>.tc4fpcb4x {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h4a5 5 0 0 1 5 5v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6V4H9a1 1 0 0 1 0-2ZM7 8H5a1 1 0 0 0-1 1v2h3Zm2 0v3h3V8Zm11 3a3 3 0 0 0-3-3h-3v3Zm1 9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Z");
}
</style><path class="tc4fpcb4x"/>`,
		"fallback": "coolicons:tram-side-fill-round",
	});
}

export default Component;

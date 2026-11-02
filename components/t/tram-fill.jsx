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
		"content": `<style>.whjv73bhl {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2h4a3 3 0 0 1 3 3v8a3 3 0 0 1-2.411 2.942l.305.611a1 1 0 1 1-1.788.894L15.382 20H8.618l-.724 1.447a1 1 0 1 1-1.788-.894l.305-.611A3 3 0 0 1 4 17V9a3 3 0 0 1 3-3h4V4H9a1 1 0 0 1 0-2ZM7 8a1 1 0 0 0-1 1v3h12V9a1 1 0 0 0-1-1Zm2.01 7H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 15a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="whjv73bhl"/>`,
		"fallback": "coolicons:tram-fill",
	});
}

export default Component;

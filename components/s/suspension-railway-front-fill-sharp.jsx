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
		"content": `<style>.p4lfkac4u {
  fill: currentColor;
  d: path("M21 3a1 1 0 0 1 0 2h-5v3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3V5H3a1 1 0 0 1 0-2Zm-7 2h-4v3h4Zm4 5H6v3h12Zm-8.99 6H9a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M15 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="p4lfkac4u"/>`,
		"fallback": "coolicons:suspension-railway-front-fill-sharp",
	});
}

export default Component;

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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.w6pql6bvv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 6h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm-6 6h12V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1Z");
}

.ys39zsbnb {
  d: path("M9 2h6a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0V4H9a1 1 0 0 1 0-2m0 13h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m-7.106 6.447a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm10-.894a1 1 0 1 1-1.788.894l-1-2a1 1 0 1 1 1.788-.894Z");
}
</style><g class="cuyn6tgcc"><path class="w6pql6bvv"/><path class="ys39zsbnb"/></g>`,
		"fallback": "coolicons:tram-bulk",
	});
}

export default Component;

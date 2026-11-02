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

.itvm9rb9t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 19V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m2-7h12V8H6Z");
}

.ys39zsbnb {
  d: path("M9 2h6a1 1 0 0 1 0 2h-2v3a1 1 0 0 1-2 0V4H9a1 1 0 0 1 0-2m0 13h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m-7.106 6.447a1 1 0 1 1-1.788-.894l1-2a1 1 0 1 1 1.788.894Zm10-.894a1 1 0 1 1-1.788.894l-1-2a1 1 0 1 1 1.788-.894Z");
}
</style><g class="cuyn6tgcc"><path class="itvm9rb9t"/><path class="ys39zsbnb"/></g>`,
		"fallback": "coolicons:tram-bulk-sharp",
	});
}

export default Component;

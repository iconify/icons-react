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

.doax69j1v {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m2.553 5.106l6-3a1 1 0 0 1 .894 0h.001L15 4.882l5.553-2.776A1 1 0 0 1 22 3v15a1 1 0 0 1-.553.894l-6 3a1 1 0 0 1-.894 0L9 19.118l-5.553 2.776A1 1 0 0 1 2 21V6c0-.379.214-.725.553-.894");
}

.wtx7gow_f {
  d: path("M10 18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6 3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="doax69j1v"/><path class="wtx7gow_f"/></g>`,
		"fallback": "coolicons:map-bulk-sharp",
	});
}

export default Component;

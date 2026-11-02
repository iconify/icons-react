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

.l01ooebfd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.448 2.106L15 4.882l1.553-.776c1.12-.56 2.457-.597 3.583-.034c.534.267.996.658 1.328 1.154C21.816 5.753 22 6.367 22 7v9c0 1.693-1.069 3.152-2.553 3.894l-4 2a1 1 0 0 1-.894 0L9 19.118l-1.553.776c-1.12.56-2.457.597-3.583.034a3.44 3.44 0 0 1-1.328-1.154A3.2 3.2 0 0 1 2 17V8c0-1.693 1.069-3.152 2.553-3.894l4-2a1 1 0 0 1 .894 0Z");
}

.wtx7gow_f {
  d: path("M10 18a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0Zm6 3a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="l01ooebfd"/><path class="wtx7gow_f"/></g>`,
		"fallback": "coolicons:map-bulk-round",
	});
}

export default Component;

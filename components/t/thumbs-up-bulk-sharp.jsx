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

.f9wb09qih {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 9a3 3 0 0 0 3-3V5a3 3 0 1 1 6 0v4h5a1 1 0 0 1 1 1v4q0 .14-.038.275l-2 7A1 1 0 0 1 19 22H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1Z");
}

.wz-c0hbvz {
  d: path("M2 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m4-10H4v9h2Z");
}
</style><g class="cuyn6tgcc"><path class="f9wb09qih"/><path class="wz-c0hbvz"/></g>`,
		"fallback": "coolicons:thumbs-up-bulk-sharp",
	});
}

export default Component;

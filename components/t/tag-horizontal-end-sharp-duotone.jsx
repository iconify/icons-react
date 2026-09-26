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

.e89p18b1c {
  d: path("M13.5 12C13.5 12.8284 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12Z");
}

.wpwt_zkck {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 3C1.4477 3 1 3.4477 1 4L1 20C1 20.5523 1.4477 21 2 21L14.8284 21C15.1126 21 15.3833 20.8791 15.573 20.6675L22.7446 12.6675C23.0851 12.2876 23.0851 11.7124 22.7446 11.3325L15.573 3.3325C15.3833 3.1209 15.1126 3 14.8284 3L2 3Z");
}
</style><g class="cuyn6tgcc"><path class="wpwt_zkck"/><path class="e89p18b1c"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-sharp-duotone",
	});
}

export default Component;

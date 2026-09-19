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
		"content": `<style>.pt271w8nt {
  fill: currentColor;
  d: path("m9.83 18l.59.59L12 20.17l1.59-1.59l.58-.58H19V4H5v14zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.t2w88tbvd {
  fill: currentColor;
  d: path("M5 20h4l3 3l3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59l-.58-.58H5zm7 13l1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z");
}
</style><path class="pt271w8nt"/><path class="t2w88tbvd"/>`,
		"fallback": "ic:twotone-assistant",
	});
}

export default Component;

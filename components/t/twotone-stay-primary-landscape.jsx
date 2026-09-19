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
		"content": `<style>.a777abcdm {
  fill: currentColor;
  d: path("M5 7h14v10H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.gt43c0zwo {
  fill: currentColor;
  d: path("M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-2 12H5V7h14z");
}
</style><path class="a777abcdm"/><path class="gt43c0zwo"/>`,
		"fallback": "ic:twotone-stay-primary-landscape",
	});
}

export default Component;

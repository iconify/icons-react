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
		"content": `<style>.b2nikhbfl {
  fill: currentColor;
  d: path("M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm9 13H7V7h14zm-9-1l5.5-4L12 8z");
}

.ueeu6da4l {
  fill: currentColor;
  d: path("M7 7v9h14V7zm5 8V8l5.5 3z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="ueeu6da4l"/><path class="b2nikhbfl"/>`,
		"fallback": "ic:twotone-shop-two",
	});
}

export default Component;

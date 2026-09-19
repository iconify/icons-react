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
		"content": `<style>.cgop8vbfg {
  fill: currentColor;
  d: path("M5 19h14V5H5zm5-11l5 4l-5 4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.j-kgtabyu {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM10 8v8l5-4z");
}
</style><path class="cgop8vbfg"/><path class="j-kgtabyu"/>`,
		"fallback": "ic:twotone-slideshow",
	});
}

export default Component;

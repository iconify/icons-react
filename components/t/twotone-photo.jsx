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
		"content": `<style>.v1i2i51lg {
  fill: currentColor;
  d: path("M19 5H5v14h14zM6 17l3-3.86l2.14 2.58l3-3.87L18 17z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.v2_-wljpu {
  fill: currentColor;
  d: path("M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M5 5h14v14H5zm6.14 10.72L9 13.14L6 17h12l-3.86-5.14z");
}
</style><path class="v1i2i51lg"/><path class="v2_-wljpu"/>`,
		"fallback": "ic:twotone-photo",
	});
}

export default Component;

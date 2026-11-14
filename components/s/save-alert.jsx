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
		"content": `<style>.pm9-gsv4x {
  d: path("M8 4v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4m3 10.5v3.25m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uuozo9bxc {
  d: path("M4 4h12.5L20 7.5v4.75h-7.75V20H4Z");
}
</style><g class="ulnmmdpxh"><path class="uuozo9bxc"/><path class="pm9-gsv4x"/></g>`,
		"fallback": "uix-sharp:save-alert",
	});
}

export default Component;

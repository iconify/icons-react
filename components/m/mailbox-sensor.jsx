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
		"content": `<style>.k0-4f4ccs {
  d: path("m2.5 8.5l6 4l6-4");
}

.qucxf5b3s {
  d: path("M2.5 7h12v10h-12Zm14.75 3.25a2.5 2.5 0 0 1 0 3.5M19.75 8a5 5 0 0 1 0 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qucxf5b3s"/><path class="k0-4f4ccs"/></g>`,
		"fallback": "uix-sharp:mailbox-sensor",
	});
}

export default Component;

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
		"content": `<style>.bk_3yib6u {
  d: path("M12 4v1.5l1.25.75");
}

.n9zxdpbgl {
  d: path("M4 13.75a8 2.25 0 1 0 16 0a8 2.25 0 1 0-16 0ZM12 16v5m-3 0h6M8.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n9zxdpbgl"/><path class="bk_3yib6u"/></g>`,
		"fallback": "uix-sharp:meeting-room-booking",
	});
}

export default Component;

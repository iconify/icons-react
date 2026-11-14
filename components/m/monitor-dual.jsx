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
		"content": `<style>.jz-1npb_j {
  d: path("M8 8h13.5v9H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpo1iqsnq {
  d: path("M5 14h-.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H15m-.25 13v3.5m-3 0h6");
}
</style><g class="ulnmmdpxh"><path class="jz-1npb_j"/><path class="vpo1iqsnq"/></g>`,
		"fallback": "uix-sharp:monitor-dual",
	});
}

export default Component;

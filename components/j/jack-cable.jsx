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
		"content": `<style>.kvvn8ebfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za1.25 1.25 0 0 1 1.25 1.25v3.5A1.25 1.25 0 0 1 12 8.5a1.25 1.25 0 0 1-1.25-1.25v-3.5A1.25 1.25 0 0 1 12 2.5m-.375 6h.75A2.625 2.625 0 0 1 15 11.125v2.75a2.625 2.625 0 0 1-2.625 2.625h-.75A2.625 2.625 0 0 1 9 13.875v-2.75A2.625 2.625 0 0 1 11.625 8.5m.375 8V18c0 2.25 1.5 3.5 4 3.5h5m-10.25-16h2.5");
}
</style><path class="kvvn8ebfk"/>`,
		"fallback": "uix:jack-cable",
	});
}

export default Component;

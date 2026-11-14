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
		"content": `<style>.ntrlozbny {
  fill: currentColor;
  d: path("M9.5 20.5v-4a2.5 2.5 0 0 1 5 0v4Z");
}

.tmwz_qbnn {
  d: path("M2 13c2-6 6-9.5 10-9.5S20 7 22 13M2 20.5h20M6 11h12M6.75 11v9.5m10.5-9.5v9.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tmwz_qbnn"/><path class="ntrlozbny"/></g>`,
		"fallback": "uix-sharp:mine-tunnel",
	});
}

export default Component;

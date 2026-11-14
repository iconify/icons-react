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
		"content": `<style>.g0ws8rvae {
  d: path("M2.5 17.5v-5a2 2 0 0 1 4 0v2h11v-2a2 2 0 0 1 4 0v5Zm2 0v2m15-2v2M12 7.5v7");
}

.stn1fwbjz {
  d: path("M6.5 14.5V7A2.5 2.5 0 0 1 9 4.5h6A2.5 2.5 0 0 1 17.5 7v7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="stn1fwbjz"/><path class="g0ws8rvae"/></g>`,
		"fallback": "uix-sharp:lobby-sofa",
	});
}

export default Component;

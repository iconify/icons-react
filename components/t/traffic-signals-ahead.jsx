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
		"content": `<style>.owselihbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5L7 3m7.5 18.5L10 3m5.5-.5H21v11h-5.5Zm2.75 2.75h.01M18.25 8h.01m-.01 2.75h.01");
}
</style><path class="owselihbp"/>`,
		"fallback": "uix-sharp:traffic-signals-ahead",
	});
}

export default Component;

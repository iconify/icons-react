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
		"content": `<style>.gfs6-1yza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3v14M8.5 3.5h7.195a1.06 1.06 0 0 1 .805 1.75l-.663.774a1.5 1.5 0 0 0 0 1.952l.663.774a1.06 1.06 0 0 1-.805 1.75H8.5A1.5 1.5 0 0 1 7 9V5a1.5 1.5 0 0 1 1.5-1.5M2.5 20H6m3.5 0h5m3.5 0h3.5");
}
</style><path class="gfs6-1yza"/>`,
		"fallback": "uix:starting-line",
	});
}

export default Component;

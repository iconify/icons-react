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
		"content": `<style>.vfdxnzbsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3m7.5 0v18M2.5 9h19m-19 6h19m-16-9h5m-5 6h5m-5 6h5M16 7.25l3-2.5M16.25 5h.01m2.49 2h.01M16 12h3m-3 6h3");
}
</style><path class="vfdxnzbsc"/>`,
		"fallback": "uix:statement-rate-sheet",
	});
}

export default Component;

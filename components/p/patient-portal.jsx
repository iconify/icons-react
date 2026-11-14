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
		"content": `<style>.pqzjmfbgh {
  d: path("M7 12a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 7 12Zm-1 5.5C6 16 7.25 15 8.75 15s2.75 1 2.75 2.5M14 12h4.5M14 15.5h4.5");
}

.psq8kqbwm {
  d: path("M2.5 3.5h19v17h-19Zm0 4h19M5 5.5h.01m2.49 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="psq8kqbwm"/><path class="pqzjmfbgh"/></g>`,
		"fallback": "uix-sharp:patient-portal",
	});
}

export default Component;

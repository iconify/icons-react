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
		"content": `<style>.n-f2lmblx {
  d: path("M5 21L9 9l1.724 5.171m1.233 3.7l.885 2.656m-7.731-9.138a5.5 5.5 0 0 1 0-7.778m7.778 0a5.5 5.5 0 0 1 0 7.778M17.75 14l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbsya0qir {
  d: path("M7.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="wbsya0qir"/><path class="n-f2lmblx"/></g>`,
		"fallback": "uix-sharp:radio-station-star",
	});
}

export default Component;

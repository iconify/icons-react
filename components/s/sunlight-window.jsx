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
		"content": `<style>.b4e05pbbe {
  d: path("m9.25 14.75l-4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ot91t0b9z {
  fill: currentColor;
  d: path("M14.75 7.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.vjl6jhbhk {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5m6 0v19M2.5 12h19");
}
</style><g class="hntgybcog"><path class="vjl6jhbhk"/><path class="ot91t0b9z"/><path class="b4e05pbbe"/></g>`,
		"fallback": "uix:sunlight-window",
	});
}

export default Component;

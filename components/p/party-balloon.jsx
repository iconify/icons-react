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
		"content": `<style>.fuiyxrxlt {
  d: path("M12 15c-3.25 0-6-3-6-6.5c0-3.25 2.75-5.75 6-5.75s6 2.5 6 5.75c0 3.5-2.75 6.5-6 6.5m.625.875za.553.553 0 0 1-.45.875h-.35a.553.553 0 0 1-.45-.875a.768.768 0 0 1 1.25 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o-bri1h3h {
  d: path("M12 16.75c0 1.75 1.25 2.75.5 4.75M8.619 7.594a3.5 3.5 0 0 1 2.475-2.475");
}
</style><g class="hntgybcog"><path class="fuiyxrxlt"/><path class="o-bri1h3h"/></g>`,
		"fallback": "uix:party-balloon",
	});
}

export default Component;

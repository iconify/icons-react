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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7wh8bbeh {
  width: 3.5px;
  height: 2.75px;
  x: 10.25px;
  y: 18.5px;
  rx: 0.75px;
}

.wpzgkqauv {
  d: path("M12 14.5C9 13 7 11 7 8a5 5 0 0 1 10 0c0 3-2 5-5 6.5m0 0v4");
}
</style><g class="hntgybcog"><path class="wpzgkqauv"/><rect class="v7wh8bbeh"/></g>`,
		"fallback": "iconoven:weather-balloon",
	});
}

export default Component;

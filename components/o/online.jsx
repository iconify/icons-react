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

.p8pksabrr {
  d: path("M12 2.5a4 9.5 0 0 0 0 19m0-19a4 9.5 0 0 1 4 9.5m-1.25 6l2 2L21 15.75");
}

.x_25ybdoh {
  d: path("M12 21.5a9.5 9.5 0 1 1 9.5-9.5m-19 0h19");
}
</style><g class="hntgybcog"><path class="x_25ybdoh"/><path class="p8pksabrr"/></g>`,
		"fallback": "uix:online",
	});
}

export default Component;

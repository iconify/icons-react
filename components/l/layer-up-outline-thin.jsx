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
		"content": `<style>.fo_ekznwu {
  d: path("M9.5 4.5 12 2l2.5 2.5");
}

.gqua-bbkg {
  d: path("M12 4v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltjpzfbzq {
  d: path("M4 19.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2");
}

.v1ku6ibql {
  d: path("M4 12.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="gqua-bbkg"/><path class="fo_ekznwu"/><path class="v1ku6ibql"/><path class="ltjpzfbzq"/></g>`,
		"fallback": "iconmind:layer-up-outline-thin",
	});
}

export default Component;

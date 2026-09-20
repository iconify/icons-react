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
		"content": `<style>.apfnny4vx {
  d: path("M12 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjki_4mtw {
  d: path("M4 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.ricsl-blc {
  d: path("M12 12v9");
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="hntgybcog"><path class="ricsl-blc"/><path class="kjki_4mtw"/><path class="apfnny4vx"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:spring-outline-thin",
	});
}

export default Component;

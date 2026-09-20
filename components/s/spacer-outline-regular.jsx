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
		"content": `<style>.bhl_zu55p {
  d: path("M9.5 10.5 12 8l2.5 2.5");
}

.h7bcztycq {
  d: path("M12 8v8");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9jmvgbqq {
  d: path("M9.5 13.5 12 16l2.5 -2.5");
}
</style><g class="nrj6p8qat"><path class="mg7aqnbsf"/><path class="jkuojibnm"/><path class="h7bcztycq"/><path class="bhl_zu55p"/><path class="p9jmvgbqq"/></g>`,
		"fallback": "iconmind:spacer-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.g7akhoeoj {
  d: path("m6 13 6 -6 6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qrqk-5btd {
  d: path("m9 17 3 3 3 -3");
}

.rwge04jxw {
  d: path("M12 4c1.5 0 1.5 2 0 2.5");
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="hntgybcog"><path class="rwge04jxw"/><path class="g7akhoeoj"/><path class="wlp3ibbib"/><path class="qrqk-5btd"/></g>`,
		"fallback": "iconmind:wardrobe-sort-outline-thin",
	});
}

export default Component;

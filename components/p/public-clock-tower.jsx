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
		"content": `<style>.bqho9om9a {
  d: path("M8.5 14a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.h-m144bfv {
  d: path("M6.5 20V8.621a1.5 1.5 0 0 1 .439-1.06l4-4a1.5 1.5 0 0 1 2.122 0l4 4a1.5 1.5 0 0 1 .439 1.06V20a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20M5 8h14M4.5 21.5h15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmqlzfbzn {
  d: path("M12 12.5V14h1.5");
}
</style><g class="hntgybcog"><path class="h-m144bfv"/><path class="bqho9om9a"/><path class="kmqlzfbzn"/></g>`,
		"fallback": "uix:public-clock-tower",
	});
}

export default Component;

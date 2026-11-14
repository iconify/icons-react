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
		"content": `<style>.cl2o3q64h {
  d: path("M12 3c3 3 3 8 0 12c-3-4-3-9 0-12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kqgty2gud {
  d: path("M12 15c-4 0-8-2.5-9-6.5c4 0 7.5 2.5 9 6.5m0 0c4 0 8-2.5 9-6.5c-4 0-7.5 2.5-9 6.5m-6 5h12");
}
</style><g class="hntgybcog"><path class="cl2o3q64h"/><path class="kqgty2gud"/></g>`,
		"fallback": "uix:lotus-flower",
	});
}

export default Component;

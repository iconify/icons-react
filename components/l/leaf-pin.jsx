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
		"content": `<style>.ezvgvhzgh {
  d: path("M12.273 17.482c-2.003.834-4.355 1.268-7.023 1.268c0-9.5 5.5-15 15-15c0 2.68-.438 5.041-1.279 7.051M3.75 20.25l1.5-1.5m0 0l8.25-8.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysquggz4z {
  d: path("M18 21.5c-1.75-2-3-3.5-3-5a3 3 0 0 1 6 0c0 1.5-1.25 3-3 5");
}
</style><g class="hntgybcog"><path class="ezvgvhzgh"/><path class="ysquggz4z"/></g>`,
		"fallback": "uix:leaf-pin",
	});
}

export default Component;

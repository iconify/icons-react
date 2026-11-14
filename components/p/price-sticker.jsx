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
		"content": `<style>.h-rxsdbeq {
  d: path("M21.5 12A9.5 9.5 0 1 1 12 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg8r6tbjz {
  d: path("M12 2.5c-.25 5.5 3.75 9.75 9.5 9.5M12 2.5l9.5 9.5M7 12h4m-4 3.5h6");
}
</style><g class="hntgybcog"><path class="h-rxsdbeq"/><path class="vg8r6tbjz"/></g>`,
		"fallback": "uix:price-sticker",
	});
}

export default Component;

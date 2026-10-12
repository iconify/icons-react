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
		"content": `<style>.eemhipsnm {
  d: path("M12 10.25v7m-2.5-2.5l2.5 2.5l2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbgdyoepo {
  d: path("M12 2.75c3.75 4.25 6.25 8 6.25 12.25a6.25 6.25 0 0 1-12.5 0c0-4.25 2.5-8 6.25-12.25");
}
</style><g class="hntgybcog"><path class="wbgdyoepo"/><path class="eemhipsnm"/></g>`,
		"fallback": "iconoven:water-save",
	});
}

export default Component;

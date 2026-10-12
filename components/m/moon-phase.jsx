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
		"content": `<style>.c5-pm9b_s {
  d: path("M12 5.75a6.25 6.25 0 0 1 0 12.5a3 6.25 0 0 1 0-12.5");
}

.d993r-bho {
  d: path("M12 2.75a9.25 9.25 0 1 1 0 18.5a9.25 9.25 0 1 1 0-18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d993r-bho"/><path class="c5-pm9b_s"/></g>`,
		"fallback": "iconoven:moon-phase",
	});
}

export default Component;

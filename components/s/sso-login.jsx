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
		"content": `<style>.bfbj0lbyp {
  d: path("M10.75 8.25L14.5 12l-3.75 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u-vvuiehl {
  d: path("M13 2.75h5.5a2.75 2.75 0 0 1 2.75 2.75v13a2.75 2.75 0 0 1-2.75 2.75H13M3 12h11.5");
}
</style><g class="hntgybcog"><path class="u-vvuiehl"/><path class="bfbj0lbyp"/></g>`,
		"fallback": "iconoven:sso-login",
	});
}

export default Component;

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
		"content": `<style>.d23j17bhi {
  d: path("M15 12v4.5a2 2 0 0 1-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_ixfwb3a {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v12a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 18V6A3.5 3.5 0 0 1 6 2.5M6 7h12M6 12h6.2M6 17h2.2");
}
</style><g class="hntgybcog"><path class="x_ixfwb3a"/><path class="d23j17bhi"/></g>`,
		"fallback": "uix:slatwall-panel",
	});
}

export default Component;

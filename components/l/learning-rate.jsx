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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jqmpoif4s {
  d: path("M6.75 6.25h4v5h4v4.5h5");
}

.qmvt8fbnf {
  d: path("M3.25 3.25v17.5h17.5");
}
</style><g class="hntgybcog"><path class="qmvt8fbnf"/><path class="jqmpoif4s"/></g>`,
		"fallback": "iconoven:learning-rate",
	});
}

export default Component;

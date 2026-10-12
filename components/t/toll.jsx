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
		"content": `<style>.a0ljzhbqy {
  d: path("M6.5 8.25H9v3.5H6.5Zm7 5h7.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7hfq__pz {
  width: 8px;
  height: 16.5px;
  x: 3.75px;
  y: 4.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="u7hfq__pz"/><path class="a0ljzhbqy"/></g>`,
		"fallback": "iconoven:toll",
	});
}

export default Component;

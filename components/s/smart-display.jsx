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

.jzu7jq9qb {
  d: path("M7.25 7.25h5m-5 3h3M6.5 17h11q1 0 1.38.92l.99 2.41q.38.92-.62.92H4.75q-1 0-.62-.92l.99-2.41Q5.5 17 6.5 17");
}

.wzljbg8ji {
  width: 16.5px;
  height: 11.25px;
  x: 3.75px;
  y: 3.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="wzljbg8ji"/><path class="jzu7jq9qb"/></g>`,
		"fallback": "iconoven:smart-display",
	});
}

export default Component;

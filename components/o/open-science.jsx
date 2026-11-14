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
		"content": `<style>.ejkj6th1k {
  d: path("M16.25 15.5h4.25v4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0ci99bme {
  d: path("M21 12.793V4.5c-3-.5-7 0-9 1.5c-2-1.5-6-2-9-1.5v14c3-.5 7 0 9 1.5q.264-.198.572-.372M12 6v14m3 1l5.25-5.25");
}
</style><g class="hntgybcog"><path class="n0ci99bme"/><path class="ejkj6th1k"/></g>`,
		"fallback": "uix:open-science",
	});
}

export default Component;

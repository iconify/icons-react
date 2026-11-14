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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.rzh3fmbte {
  d: path("M8.5 7.5h7V10a3.5 3.5 0 0 1-7 0ZM2.75 10H8.5m7 0h5.75M12 13.5v8m-2-5.25h4");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="rzh3fmbte"/></g>`,
		"fallback": "uix:trophy-steering-wheel",
	});
}

export default Component;

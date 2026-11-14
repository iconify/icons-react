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

.id_t5lzlv {
  d: path("M12 15.5v-9C11 3.5 7 3 5.5 9M12 6.5c1-3 5-3.5 6.5 2.5m-13 3h.01m12.99 0h.01");
}

.j05entbca {
  d: path("M2.5 18.5a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="j05entbca"/><path class="id_t5lzlv"/></g>`,
		"fallback": "uix:spring-water",
	});
}

export default Component;

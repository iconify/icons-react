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
		"content": `<style>.ev_frlb7a {
  d: path("M16 9h6v6h-6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6lzm3bun {
  d: path("M5.5 13 3 15.5");
}

.t9l7d0eki {
  d: path("M4 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}
</style><g class="hntgybcog"><path class="t9l7d0eki"/><path class="i6lzm3bun"/><path class="ev_frlb7a"/></g>`,
		"fallback": "iconmind:stop-search-outline-thin",
	});
}

export default Component;

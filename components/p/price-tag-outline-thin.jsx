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
		"content": `<style>.b853q9vsx {
  d: path("M6.5 9.5v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh6k2u0sg {
  d: path("M2 11a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.vxe1lob-r {
  d: path("M14 13h5l3 3 -3 3h-5Z");
}
</style><g class="hntgybcog"><path class="kh6k2u0sg"/><path class="b853q9vsx"/><path class="vxe1lob-r"/></g>`,
		"fallback": "iconmind:price-tag-outline-thin",
	});
}

export default Component;

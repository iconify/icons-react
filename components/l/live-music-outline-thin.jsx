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
		"content": `<style>.acr8x6wbq {
  d: path("M15 9c2 2 2 6 0 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jrneb7jzh {
  d: path("M18 6c3 3.5 3 10.5 0 14");
}

.mp2qg-3hm {
  d: path("M12 17V5");
}

.pe4oq0b5e {
  d: path("M6 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="pe4oq0b5e"/><path class="mp2qg-3hm"/><path class="acr8x6wbq"/><path class="jrneb7jzh"/></g>`,
		"fallback": "iconmind:live-music-outline-thin",
	});
}

export default Component;

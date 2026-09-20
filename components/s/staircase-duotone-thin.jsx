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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6ckx-bvr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21v-4h5v-4h5V9h5V5h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sb40gqbga {
  d: path("M3 21v-4h5v-4h5V9h5V5h3");
}

.ymhw07_9a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="s6ckx-bvr"/><path class="ymhw07_9a"/><path class="sb40gqbga"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:staircase-duotone-thin",
	});
}

export default Component;

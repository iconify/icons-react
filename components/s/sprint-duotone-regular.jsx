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
		"content": `<style>.a-xc2ibwn {
  d: path("M12 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cgousu48d {
  fill: currentColor;
  d: path("M12 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g6v1wdg_x {
  d: path("M10 12 6 8");
}

.lks7935qz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 20h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q1ae0k4gd {
  d: path("m14 16 4 4");
}

.r9f5gwboh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 12 6 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tiy3lejyq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 16 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.u46xm9b9w {
  d: path("m14 8 -4 4 4 4");
}

.z91-mkbau {
  d: path("M3 20h5");
}

.zaxv3-bjr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 8 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="cgousu48d"/><path class="zaxv3-bjr"/><path class="r9f5gwboh"/><path class="tiy3lejyq"/><path class="lks7935qz"/><path class="a-xc2ibwn"/><path class="u46xm9b9w"/><path class="g6v1wdg_x"/><path class="q1ae0k4gd"/><path class="z91-mkbau"/></g>`,
		"fallback": "iconmind:sprint-duotone-regular",
	});
}

export default Component;

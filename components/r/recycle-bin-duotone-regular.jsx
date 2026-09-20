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
		"content": `<style>.aqrf9ebcv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f6kbfx-8d {
  d: path("m9 17 3 -3 3 3");
}

.mvvbl7zxc {
  d: path("M6 8v13h12V8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.spg3og_ww {
  d: path("M9 8V5h6v3");
}

.umkaotb6q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 8v13h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.w_x_r3bqv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 17 3 -3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wmthecefb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 8V5h6v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="umkaotb6q"/><path class="aqrf9ebcv"/><path class="wmthecefb"/><path class="w_x_r3bqv"/><path class="mvvbl7zxc"/><path class="vhnbtvbtn"/><path class="spg3og_ww"/><path class="f6kbfx-8d"/></g>`,
		"fallback": "iconmind:recycle-bin-duotone-regular",
	});
}

export default Component;

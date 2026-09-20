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
		"content": `<style>.eud-3ptuk {
  d: path("M15 12h7");
}

.fjd2y84pn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i6ydbdc_n {
  d: path("m9 4 6 6v4l-6 6");
}

.m6l7pab1i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 4 6 6v4l-6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ms85c68gf {
  d: path("M2 20h7");
}

.otb2wbb6e {
  d: path("M2 4h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.twdzgduei {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 20h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.w0oxue8ig {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 4h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wj4cfmbhq {
  d: path("M2 12h7");
}

.y0q-a8b8z {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 12h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="w0oxue8ig"/><path class="y0q-a8b8z"/><path class="twdzgduei"/><path class="m6l7pab1i"/><path class="fjd2y84pn"/><path class="otb2wbb6e"/><path class="wj4cfmbhq"/><path class="ms85c68gf"/><path class="i6ydbdc_n"/><path class="eud-3ptuk"/></g>`,
		"fallback": "iconmind:nat-duotone-bold",
	});
}

export default Component;

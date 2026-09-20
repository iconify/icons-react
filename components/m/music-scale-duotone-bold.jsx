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
		"content": `<style>.aeyekmbly {
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.b6rnmzrfq {
  d: path("M19 11V5");
}

.bu8855bwv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 15V9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gnggw0bkv {
  d: path("M7 19v-6");
}

.jz9jnbbik {
  fill: currentColor;
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l6_c8rp0i {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 19v-6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m7i92hb6f {
  d: path("M13 15V9");
}

.rmcdk3s9f {
  fill: currentColor;
  d: path("M15 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vdtq04f-f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 11V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ve_htnadp {
  d: path("M15 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w3qv73i9r {
  d: path("M9 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zjx9qrbec {
  fill: currentColor;
  d: path("M9 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="jz9jnbbik"/><path class="zjx9qrbec"/><path class="rmcdk3s9f"/><path class="l6_c8rp0i"/><path class="bu8855bwv"/><path class="vdtq04f-f"/><path class="aeyekmbly"/><path class="gnggw0bkv"/><path class="w3qv73i9r"/><path class="m7i92hb6f"/><path class="ve_htnadp"/><path class="b6rnmzrfq"/></g>`,
		"fallback": "iconmind:music-scale-duotone-bold",
	});
}

export default Component;

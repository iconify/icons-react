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

.axr3xwb0d {
  d: path("m7 17 4 -4");
}

.bbyt2gbhw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11 13h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cn1mb64lb {
  d: path("M11 13h4");
}

.hii_9808s {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 5v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jhhozmbca {
  d: path("M19 5v4h-4");
}

.jz9jnbbik {
  fill: currentColor;
  d: path("M3 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.phefmrbhr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 17 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r1wy_ibgj {
  d: path("m15 13 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ybyc8pxiv {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 13 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jz9jnbbik"/><path class="phefmrbhr"/><path class="bbyt2gbhw"/><path class="ybyc8pxiv"/><path class="hii_9808s"/><path class="aeyekmbly"/><path class="axr3xwb0d"/><path class="cn1mb64lb"/><path class="r1wy_ibgj"/><path class="jhhozmbca"/></g>`,
		"fallback": "iconmind:strategy-duotone-bold",
	});
}

export default Component;

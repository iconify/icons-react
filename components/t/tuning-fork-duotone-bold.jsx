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
		"content": `<style>.ffs26fbkv {
  d: path("M12 17v4");
}

.ftej-1ggr {
  d: path("M8 3v10");
}

.g6bypobmt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 17v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i-83xabxj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.koxc2rbcm {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o3x_gzblq {
  d: path("m8 13 4 4 4 -4");
}

.p_xsqcbww {
  d: path("M16 3v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vmp8eebwz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m8 13 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="i-83xabxj"/><path class="koxc2rbcm"/><path class="vmp8eebwz"/><path class="g6bypobmt"/><path class="ftej-1ggr"/><path class="p_xsqcbww"/><path class="o3x_gzblq"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:tuning-fork-duotone-bold",
	});
}

export default Component;

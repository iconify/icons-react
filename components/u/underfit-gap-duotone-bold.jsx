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
		"content": `<style>.gnfxbib2f {
  d: path("M6 8h13");
}

.kba2rfftw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 13h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kkpc42b8r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 8h13");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nyl8f3o_r {
  d: path("M6 13h13");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="kkpc42b8r"/><path class="kba2rfftw"/><path class="qe97cg-lx"/><path class="gnfxbib2f"/><path class="nyl8f3o_r"/></g>`,
		"fallback": "iconmind:underfit-gap-duotone-bold",
	});
}

export default Component;

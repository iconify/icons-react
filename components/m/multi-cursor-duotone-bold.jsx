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
		"content": `<style>.d223d_x9q {
  d: path("M3 12h6");
}

.doi_mob1c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eb8o-4buj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h7vr07ufd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 5h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.kkvfu5bre {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 9v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l517yxbln {
  d: path("M12 9v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.treh3acop {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 16v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxy9sxbfx {
  d: path("M3 19h10");
}

.z5zbrh5-r {
  d: path("M16 16v6");
}
</style><g class="s0phu2bbs"><path class="h7vr07ufd"/><path class="eb8o-4buj"/><path class="kkvfu5bre"/><path class="doi_mob1c"/><path class="treh3acop"/><path class="k6nj2fbya"/><path class="d223d_x9q"/><path class="l517yxbln"/><path class="uxy9sxbfx"/><path class="z5zbrh5-r"/></g>`,
		"fallback": "iconmind:multi-cursor-duotone-bold",
	});
}

export default Component;

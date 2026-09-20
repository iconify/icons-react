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
		"content": `<style>.ah2gkhstn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ajhfqqnbg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c27cgq4un {
  d: path("M18 8v8");
}

.cs9f_sbcc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h2sq3fbpa {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h7bcztycq {
  d: path("M12 8v8");
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o759xmblc {
  d: path("M6 8v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="ah2gkhstn"/><path class="cs9f_sbcc"/><path class="ajhfqqnbg"/><path class="h2sq3fbpa"/><path class="xgrfb-bqu"/><path class="o759xmblc"/><path class="h7bcztycq"/><path class="c27cgq4un"/><path class="xyj-l9cjp"/></g>`,
		"fallback": "iconmind:normalize-duotone-bold",
	});
}

export default Component;

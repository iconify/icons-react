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
		"content": `<style>.cjm57lbvu {
  d: path("M9 7h6l-6 6h6");
}

.crv4i00bu {
  d: path("M4 3v18");
}

.dqhr-gbix {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 7h6l-6 6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lulmb9b1a {
  d: path("M4 4h16v12H4");
}

.qn-h03e3f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zwjzc3g_l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qn-h03e3f"/><path class="zwjzc3g_l"/><path class="dqhr-gbix"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="cjm57lbvu"/></g>`,
		"fallback": "iconmind:stale-checkpoint-duotone-bold",
	});
}

export default Component;

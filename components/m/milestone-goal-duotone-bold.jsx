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
		"content": `<style>.crv4i00bu {
  d: path("M4 3v18");
}

.grz5j0gbi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 7v5");
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

.sfjortb-o {
  d: path("M12 7v5");
}

.ucuiysazu {
  d: path("M9.5 9.5 12 12l2.5 -2.5");
}

.yixeh57-u {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 9.5 12 12l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zwjzc3g_l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 4h16v12H4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="qn-h03e3f"/><path class="zwjzc3g_l"/><path class="grz5j0gbi"/><path class="yixeh57-u"/><path class="crv4i00bu"/><path class="lulmb9b1a"/><path class="sfjortb-o"/><path class="ucuiysazu"/></g>`,
		"fallback": "iconmind:milestone-goal-duotone-bold",
	});
}

export default Component;

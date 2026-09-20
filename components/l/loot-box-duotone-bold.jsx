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
		"content": `<style>.buphzhbcx {
  d: path("m15 9 2 -2");
}

.d4yxbb03p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m15 9 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.g55pkgb9q {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gy24xikbq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i9jx3nbss {
  d: path("M9 9 7 7");
}

.ivnzz4jio {
  d: path("M12 8V5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sv8lhpyik {
  d: path("M5 11v9h14v-9");
}

.ynb6hvbvw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 9 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zqacdi7pw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 11v9h14v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="zqacdi7pw"/><path class="g55pkgb9q"/><path class="gy24xikbq"/><path class="ynb6hvbvw"/><path class="d4yxbb03p"/><path class="sv8lhpyik"/><path class="d8abqfbpc"/><path class="ivnzz4jio"/><path class="i9jx3nbss"/><path class="buphzhbcx"/></g>`,
		"fallback": "iconmind:loot-box-duotone-bold",
	});
}

export default Component;

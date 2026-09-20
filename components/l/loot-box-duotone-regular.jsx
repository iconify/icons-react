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

.d8abqfbpc {
  d: path("M3 11h18");
}

.digwvcbca {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i9jx3nbss {
  d: path("M9 9 7 7");
}

.ivnzz4jio {
  d: path("M12 8V5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qrtseogvw {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 8V5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sg_0cmqdh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 9 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sv8lhpyik {
  d: path("M5 11v9h14v-9");
}

.t2kt2djuj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 11v9h14v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zy-blebfy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 9 2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="t2kt2djuj"/><path class="digwvcbca"/><path class="qrtseogvw"/><path class="sg_0cmqdh"/><path class="zy-blebfy"/><path class="sv8lhpyik"/><path class="d8abqfbpc"/><path class="ivnzz4jio"/><path class="i9jx3nbss"/><path class="buphzhbcx"/></g>`,
		"fallback": "iconmind:loot-box-duotone-regular",
	});
}

export default Component;

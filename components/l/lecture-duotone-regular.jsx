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
		"content": `<style>.l2bljsbmn {
  d: path("M12 9v11");
}

.nkz3mtbwk {
  fill: currentColor;
  d: path("m5 8 3 -3h11v3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.xgzlj4bea {
  d: path("m5 8 3 -3h11v3Z");
}
</style><g class="nrj6p8qat"><path class="nkz3mtbwk"/><path class="xgzlj4bea"/><path class="l2bljsbmn"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:lecture-duotone-regular",
	});
}

export default Component;

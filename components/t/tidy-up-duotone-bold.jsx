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
		"content": `<style>.icvc39peu {
  d: path("m9 7 3 3 3 -3");
}

.lh_8lcb-x {
  d: path("M12 4v6");
}

.lhk-ji-wo {
  d: path("M5 12v8h14v-8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tlj36_-3d {
  fill: currentColor;
  d: path("M5 12v8h14v-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="tlj36_-3d"/><path class="lhk-ji-wo"/><path class="lh_8lcb-x"/><path class="icvc39peu"/></g>`,
		"fallback": "iconmind:tidy-up-duotone-bold",
	});
}

export default Component;

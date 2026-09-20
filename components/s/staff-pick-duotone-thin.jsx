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
		"content": `<style>.adxensbci {
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmwlt6bbh {
  d: path("m9 8.5 2 2 4 -4");
}

.p3ulwu3dh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 8.5 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xqbuapx8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 1 1 0 -13M9.5 14.5V22l2.5 -2.5 2.5 2.5v-7.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="xqbuapx8e"/><path class="p3ulwu3dh"/><path class="adxensbci"/><path class="nmwlt6bbh"/></g>`,
		"fallback": "iconmind:staff-pick-duotone-thin",
	});
}

export default Component;

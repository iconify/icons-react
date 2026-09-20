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
		"content": `<style>.av-slcbjo {
  d: path("M2 17a10 10 0 0 1 18 -6 5 5 0 0 0 -8 0");
}

.cjsg0ab2y {
  d: path("M2 20h20");
}

.kakiz1beo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 20h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zv12eww4b {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 17a10 10 0 0 1 18 -6 5 5 0 0 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zv12eww4b"/><path class="kakiz1beo"/><path class="av-slcbjo"/><path class="cjsg0ab2y"/></g>`,
		"fallback": "iconmind:tsunami-duotone-regular",
	});
}

export default Component;

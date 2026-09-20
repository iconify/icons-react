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
		"content": `<style>.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oy6b_1b_a {
  d: path("M3 20V10h18v10Z");
}

.qb7dqkbxu {
  fill: currentColor;
  d: path("M3 20V10h18v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="nrj6p8qat"><path class="qb7dqkbxu"/><path class="oy6b_1b_a"/><path class="ltriwmbuu"/><path class="yngda3bvc"/></g>`,
		"fallback": "iconmind:toolbox-duotone-regular",
	});
}

export default Component;

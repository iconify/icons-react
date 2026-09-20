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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ob7_514es {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ta3x4q95u {
  d: path("M9 6a6 6 0 0 0 0 12zm6 0a6 6 0 0 1 0 12z");
}
</style><g class="nrj6p8qat"><path class="ob7_514es"/><path class="ta3x4q95u"/></g>`,
		"fallback": "iconmind:stock-split-duotone-regular",
	});
}

export default Component;

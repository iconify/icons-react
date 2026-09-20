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

.ox9r9tr9v {
  d: path("M19 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vt-ep0bmh {
  d: path("M3 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.w1nvaacaj {
  d: path("M20 3v5");
}
</style><g class="nrj6p8qat"><path class="vt-ep0bmh"/><path class="w1nvaacaj"/><path class="ox9r9tr9v"/></g>`,
		"fallback": "iconmind:taint-outline-regular",
	});
}

export default Component;

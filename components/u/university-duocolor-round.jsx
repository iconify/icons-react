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

.qxb1eforw {
  stroke-opacity: 0.4;
  d: path("M6 12v5m4-5v5m4-5v5m4-5v5");
}

.x_os-4btz {
  d: path("m20 6l-8 3l-8-3l8-3zM3 21h18M20 6v3");
}
</style><g class="nrj6p8qat"><path class="qxb1eforw"/><path class="x_os-4btz"/></g>`,
		"fallback": "coolicons:university-duocolor-round",
	});
}

export default Component;

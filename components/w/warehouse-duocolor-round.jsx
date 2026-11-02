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
		"content": `<style>.cr9p0dbai {
  d: path("M3 21h18M5 21v-9c0-1.226.774-2.387 2-3l4-2h2l4 2c1.226.613 2 1.774 2 3v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ygr-3532s {
  stroke-opacity: 0.4;
  d: path("M9 21v-8h6v8m-6-4h6");
}
</style><g class="nrj6p8qat"><path class="ygr-3532s"/><path class="cr9p0dbai"/></g>`,
		"fallback": "coolicons:warehouse-duocolor-round",
	});
}

export default Component;

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
		"content": `<style>.ic32ko01d {
  d: path("M3 21h18M5 21V10l6-3h2l6 3v11");
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
</style><g class="nrj6p8qat"><path class="ygr-3532s"/><path class="ic32ko01d"/></g>`,
		"fallback": "coolicons:warehouse-duocolor-sharp",
	});
}

export default Component;

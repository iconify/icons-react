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
		"content": `<style>.dytifdcql {
  stroke-opacity: 0.4;
  d: path("M9 6a3 3 0 0 1 6 0v4M2 5l17 17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4mkg0b6k {
  d: path("M18 21H4V10h3m6 0h7v7");
}
</style><g class="nrj6p8qat"><path class="dytifdcql"/><path class="t4mkg0b6k"/></g>`,
		"fallback": "coolicons:lock-off-duocolor-sharp",
	});
}

export default Component;

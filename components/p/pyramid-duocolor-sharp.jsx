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
		"content": `<style>.i5w95gbde {
  stroke-opacity: 0.4;
  d: path("m12 5l4 15");
}

.n4fw95b9v {
  d: path("m12 5l10 15H2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i5w95gbde"/><path class="n4fw95b9v"/></g>`,
		"fallback": "coolicons:pyramid-duocolor-sharp",
	});
}

export default Component;

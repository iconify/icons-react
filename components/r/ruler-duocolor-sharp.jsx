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
		"content": `<style>.eba0prbjj {
  stroke-opacity: 0.4;
  d: path("m5 13l2 2m2-6l2 2m2-6l2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.petm7cbey {
  d: path("m9 9l6-6l6 6L9 21l-6-6z");
}
</style><g class="nrj6p8qat"><path class="eba0prbjj"/><path class="petm7cbey"/></g>`,
		"fallback": "coolicons:ruler-duocolor-sharp",
	});
}

export default Component;

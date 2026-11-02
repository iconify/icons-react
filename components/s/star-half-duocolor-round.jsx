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
		"content": `<style>.aaujph9kg {
  d: path("m12 3l3 6l7 1l-5 5l1 6l-6-3l-6 3l1-6l-5-5l7-1Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ycvtv5baz {
  stroke-opacity: 0.4;
  d: path("M12 3v15");
}
</style><g class="nrj6p8qat"><path class="ycvtv5baz"/><path class="aaujph9kg"/></g>`,
		"fallback": "coolicons:star-half-duocolor-round",
	});
}

export default Component;

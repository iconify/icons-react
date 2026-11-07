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
		"content": `<style>.aa5qvwn9h {
  d: path("M7 5C3 9 3 15 7 19M17 5c4 4 4 10 0 14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tqffmp7ti {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6m0-6l-6 6");
}
</style><g class="nrj6p8qat"><path class="tqffmp7ti"/><path class="aa5qvwn9h"/></g>`,
		"fallback": "coolicons:variable-duocolor",
	});
}

export default Component;

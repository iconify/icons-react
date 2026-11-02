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

.trai7bbkt {
  d: path("m4 5l12 7l-12 7Z");
}

.uax7j3gsp {
  stroke-opacity: 0.4;
  d: path("M20 5v14");
}
</style><g class="nrj6p8qat"><path class="uax7j3gsp"/><path class="trai7bbkt"/></g>`,
		"fallback": "coolicons:skip-forward-duocolor-sharp",
	});
}

export default Component;

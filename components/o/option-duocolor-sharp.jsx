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
		"content": `<style>.eb6ap2nsn {
  d: path("M3 7h6l6 10h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xshfmibey {
  stroke-opacity: 0.4;
  d: path("M15 7h6");
}
</style><g class="nrj6p8qat"><path class="xshfmibey"/><path class="eb6ap2nsn"/></g>`,
		"fallback": "coolicons:option-duocolor-sharp",
	});
}

export default Component;

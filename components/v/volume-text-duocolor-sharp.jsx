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
		"content": `<style>.c86uuzbhr {
  stroke-opacity: 0.4;
  d: path("M3 9h6M6 9v6");
}

.kjo_8vpbd {
  d: path("M13 10h3l5-5v14l-5-5h-3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c86uuzbhr"/><path class="kjo_8vpbd"/></g>`,
		"fallback": "coolicons:volume-text-duocolor-sharp",
	});
}

export default Component;

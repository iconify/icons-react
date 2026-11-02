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

.v8opnab4b {
  stroke-opacity: 0.4;
  d: path("M11 3H6v7M3 7l3 3l3-3");
}

.vojuqzbql {
  d: path("M3 15h6v6H3ZM15 3h6v6h-6Z");
}
</style><g class="nrj6p8qat"><path class="v8opnab4b"/><path class="vojuqzbql"/></g>`,
		"fallback": "coolicons:replace-duocolor-sharp",
	});
}

export default Component;

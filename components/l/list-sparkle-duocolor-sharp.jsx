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
		"content": `<style>.amwa-x10o {
  stroke-opacity: 0.4;
  d: path("M18 15c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3c1 0 3-2 3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zs6nbgzoh {
  d: path("M8 4h10M8 9h10M8 14h4M4 4h.01M4 9h.01M4 14h.01");
}
</style><g class="nrj6p8qat"><path class="amwa-x10o"/><path class="zs6nbgzoh"/></g>`,
		"fallback": "coolicons:list-sparkle-duocolor-sharp",
	});
}

export default Component;

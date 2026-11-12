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
		"content": `<style>.jbds56bak {
  d: path("M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Zm-2 5h2m14 0h2");
}

.jx-a7achz {
  stroke-opacity: 0.4;
  d: path("M12 6.6c.3 1.5 1.2 2.7 2.4 3.6c.9.9 1.2 2.1 1.2 3.6a3.6 3.6 0 1 1-7.2 0c0-.9.3-1.5.6-1.8a1.2 1.2 0 0 0 2.4 0c0-.9-.3-1.2-.6-1.8c-.6-1.2-.3-2.4 1.2-3.6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jx-a7achz"/><path class="jbds56bak"/></g>`,
		"fallback": "coolicons:meter-gas-duocolor-round",
	});
}

export default Component;

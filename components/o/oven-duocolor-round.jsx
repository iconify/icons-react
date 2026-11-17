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

.q2e-gybon {
  d: path("M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm4-1h.01M12 6h.01M16 6h.01M8 10h8");
}

.y76on5bzq {
  stroke-opacity: 0.4;
  d: path("M8 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="y76on5bzq"/><path class="q2e-gybon"/></g>`,
		"fallback": "coolicons:oven-duocolor-round",
	});
}

export default Component;

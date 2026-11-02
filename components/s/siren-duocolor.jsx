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
		"content": `<style>.gptb4sr0g {
  d: path("M8 17v-4a4 4 0 1 1 8 0v4M5 18a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm7-5v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ryy7bo74d {
  stroke-opacity: 0.4;
  d: path("M12 3v2M4 5l2 2m14-2l-2 2");
}
</style><g class="nrj6p8qat"><path class="ryy7bo74d"/><path class="gptb4sr0g"/></g>`,
		"fallback": "coolicons:siren-duocolor",
	});
}

export default Component;

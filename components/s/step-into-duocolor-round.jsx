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
		"content": `<style>.ky2prbbwy {
  d: path("M12 3v10m-3-3l3 3l3-3");
}

.lny_l6bpa {
  stroke-opacity: 0.4;
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lny_l6bpa"/><path class="ky2prbbwy"/></g>`,
		"fallback": "coolicons:step-into-duocolor-round",
	});
}

export default Component;

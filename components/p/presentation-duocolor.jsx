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
		"content": `<style>.nj8ft2b8q {
  d: path("M5 3v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3M3 3h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vorzg9apl {
  stroke-opacity: 0.4;
  d: path("m12 16l-5 5m5-5l5 5");
}
</style><g class="nrj6p8qat"><path class="vorzg9apl"/><path class="nj8ft2b8q"/></g>`,
		"fallback": "coolicons:presentation-duocolor",
	});
}

export default Component;

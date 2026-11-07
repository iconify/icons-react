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
		"content": `<style>.l0srflbyw {
  d: path("M3 7V3h4m10 0h4v4m0 10v4h-4M7 21H3v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.us36v70ur {
  stroke-opacity: 0.4;
  d: path("M7 8h10M7 12h10M7 16h6");
}
</style><g class="nrj6p8qat"><path class="us36v70ur"/><path class="l0srflbyw"/></g>`,
		"fallback": "coolicons:scan-text-duocolor-sharp",
	});
}

export default Component;

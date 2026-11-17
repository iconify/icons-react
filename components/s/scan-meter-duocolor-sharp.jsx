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
		"content": `<style>.dtl3rlb4a {
  stroke-opacity: 0.4;
  d: path("M6 10h12v4H6Zm4 0v4m4-4v4");
}

.l0srflbyw {
  d: path("M3 7V3h4m10 0h4v4m0 10v4h-4M7 21H3v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dtl3rlb4a"/><path class="l0srflbyw"/></g>`,
		"fallback": "coolicons:scan-meter-duocolor-sharp",
	});
}

export default Component;

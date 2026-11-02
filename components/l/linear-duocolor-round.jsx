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
		"content": `<style>.h6lp4-bcm {
  stroke-opacity: 0.4;
  d: path("M5.292 6a9 9 0 1 1 12.709 12.708Z");
}

.ial_5vbsz {
  d: path("m3.307 9.67l11.022 11.023M3.898 15.92l4.183 4.183");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h6lp4-bcm"/><path class="ial_5vbsz"/></g>`,
		"fallback": "coolicons:linear-duocolor-round",
	});
}

export default Component;

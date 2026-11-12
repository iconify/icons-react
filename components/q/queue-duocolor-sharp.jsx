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
		"content": `<style>.bsige7bzw {
  d: path("M3 3h8v6H3Zm0 12h8v6H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sloak6mhm {
  stroke-opacity: 0.4;
  d: path("M18 3v18m-3-3l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="sloak6mhm"/><path class="bsige7bzw"/></g>`,
		"fallback": "coolicons:queue-duocolor-sharp",
	});
}

export default Component;

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
		"content": `<style>.hhdy0tn7o {
  d: path("M12 3h3v3M3 16h6v5H3zm18 2v3h-6v-5h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.whms24sxa {
  stroke-opacity: 0.4;
  d: path("M6 16v-4h9M5 2l17 17");
}
</style><g class="nrj6p8qat"><path class="whms24sxa"/><path class="hhdy0tn7o"/></g>`,
		"fallback": "coolicons:network-off-duocolor-sharp",
	});
}

export default Component;

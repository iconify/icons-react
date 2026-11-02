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
		"content": `<style>.eyyyeghth {
  d: path("M4 3h16v18H4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vc_s7sh1o {
  stroke-opacity: 0.4;
  d: path("M12 18h.01");
}
</style><g class="nrj6p8qat"><path class="vc_s7sh1o"/><path class="eyyyeghth"/></g>`,
		"fallback": "coolicons:tablet-button-duocolor-sharp",
	});
}

export default Component;

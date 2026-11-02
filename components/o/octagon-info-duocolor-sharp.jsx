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
		"content": `<style>.ar4p7fb_d {
  stroke-opacity: 0.4;
  d: path("M12 8h.01M12 11v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qk302m6ft {
  d: path("M12 3h4l5 5v8l-5 5H8l-5-5V8l5-5z");
}
</style><g class="nrj6p8qat"><path class="ar4p7fb_d"/><path class="qk302m6ft"/></g>`,
		"fallback": "coolicons:octagon-info-duocolor-sharp",
	});
}

export default Component;

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
		"content": `<style>.njoo6ks6c {
  d: path("M7 12V5a2 2 0 1 1 4 0v7a4.472 4.472 0 1 1-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rtfbuubui {
  stroke-opacity: 0.4;
  d: path("M15 4h4m-4 3h2m-2 3h4");
}
</style><g class="nrj6p8qat"><path class="rtfbuubui"/><path class="njoo6ks6c"/></g>`,
		"fallback": "coolicons:thermometer-duocolor",
	});
}

export default Component;

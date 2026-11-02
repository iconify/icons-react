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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r805trlnc {
  stroke-opacity: 0.4;
  d: path("m12 12l9-9m-6 0h6v6");
}

.vde49ebwh {
  d: path("M3 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0");
}
</style><g class="nrj6p8qat"><path class="r805trlnc"/><path class="vde49ebwh"/></g>`,
		"fallback": "coolicons:mars-duocolor-sharp",
	});
}

export default Component;

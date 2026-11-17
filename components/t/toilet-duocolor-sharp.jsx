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
		"content": `<style>.ih3jbkbab {
  d: path("M4 11h16a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rm5c8wr8c {
  stroke-opacity: 0.4;
  d: path("M4 11V3h6v8");
}
</style><g class="nrj6p8qat"><path class="rm5c8wr8c"/><path class="ih3jbkbab"/></g>`,
		"fallback": "coolicons:toilet-duocolor-sharp",
	});
}

export default Component;

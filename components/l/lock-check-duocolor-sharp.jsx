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
		"content": `<style>.cgwbwtp3a {
  stroke-opacity: 0.4;
  d: path("m8 15l3 3l5-5");
}

.kcxs7db4r {
  d: path("M4 10h16v11H4Zm5 0V6a3 3 0 0 1 6 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cgwbwtp3a"/><path class="kcxs7db4r"/></g>`,
		"fallback": "coolicons:lock-check-duocolor-sharp",
	});
}

export default Component;

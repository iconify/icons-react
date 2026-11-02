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
		"content": `<style>.a-7__ob0f {
  stroke-opacity: 0.4;
  d: path("M8 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.gnwdu8b6m {
  d: path("M8 4h3c.64 0 1.36.36 2 1l6 6a1.414 1.414 0 0 1 0 2l-6 6a1.414 1.414 0 0 1-2 0l-6-6c-.64-.64-1-1.36-1-2V6a2 2 0 0 1 2-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a-7__ob0f"/><path class="gnwdu8b6m"/></g>`,
		"fallback": "coolicons:tag-duocolor",
	});
}

export default Component;

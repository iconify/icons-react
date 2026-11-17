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
		"content": `<style>.ndtb-sbnr {
  stroke-opacity: 0.4;
  d: path("M6 21h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.os2n-_eus {
  d: path("M16 10v3a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4V7c0-.64-.36-1.36-1-2L5 4c-.369-.369.262-1 1-1h6a4 4 0 0 1 4 4zm0-3h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2");
}
</style><g class="nrj6p8qat"><path class="ndtb-sbnr"/><path class="os2n-_eus"/></g>`,
		"fallback": "coolicons:kettle-duocolor-round",
	});
}

export default Component;

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
		"content": `<style>.j47yg1kmm {
  stroke-opacity: 0.4;
  d: path("m15 10l-3-3l-3 3m3-3v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqu4abb4q {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5 14h6");
}
</style><g class="nrj6p8qat"><path class="j47yg1kmm"/><path class="oqu4abb4q"/></g>`,
		"fallback": "coolicons:monitor-upload-duocolor",
	});
}

export default Component;

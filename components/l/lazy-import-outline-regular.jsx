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

.pxmcfjbnu {
  d: path("M3 11a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.qcu95-bhb {
  d: path("M15 4h4l-4 4h4");
}
</style><g class="nrj6p8qat"><path class="pxmcfjbnu"/><path class="qcu95-bhb"/></g>`,
		"fallback": "iconmind:lazy-import-outline-regular",
	});
}

export default Component;

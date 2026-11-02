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
		"content": `<style>.e3xlw3esn {
  stroke-opacity: 0.4;
  d: path("M12 3v3m0 6v9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vfmbi0sup {
  d: path("M10 6h6c.64 0 1.36.36 2 1l1 1a1.414 1.414 0 0 1 0 2l-1 1c-.64.64-1.36 1-2 1H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z");
}
</style><g class="nrj6p8qat"><path class="e3xlw3esn"/><path class="vfmbi0sup"/></g>`,
		"fallback": "coolicons:signpost-duocolor",
	});
}

export default Component;

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

.t8ajqlbzy {
  stroke-opacity: 0.4;
  d: path("M4 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m12-2h4v4h-4Zm-6 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.z66xaz0er {
  d: path("m9 6l3-3l3 3m-3-3v14m-4-5l4 4l4-4");
}
</style><g class="nrj6p8qat"><path class="t8ajqlbzy"/><path class="z66xaz0er"/></g>`,
		"fallback": "coolicons:usb-duocolor-sharp",
	});
}

export default Component;

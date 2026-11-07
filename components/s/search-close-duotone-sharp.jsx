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
		"content": `<style>.f-imhsbzy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}

.ft5dv1b6b {
  fill: none;
}

.kv2bijkoi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0m12 5l6 6M8 8l4 4m0-4l-4 4");
}
</style><g class="ft5dv1b6b"><path class="f-imhsbzy"/><path class="kv2bijkoi"/></g>`,
		"fallback": "coolicons:search-close-duotone-sharp",
	});
}

export default Component;

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
		"content": `<style>.f4hg3dbuq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 12a2 2 0 1 1 3.999-.001A2 2 0 0 1 4 12m12-2h4v4h-4Zm-6 9a2 2 0 1 1 3.999-.001A2 2 0 0 1 10 19");
}

.ft5dv1b6b {
  fill: none;
}

.zoyn-ou5o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 6l3-3l3 3m-3-3v14m-4-5l4 4l4-4M4 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m12-2h4v4h-4Zm-6 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="ft5dv1b6b"><path class="f4hg3dbuq"/><path class="zoyn-ou5o"/></g>`,
		"fallback": "coolicons:usb-duotone-sharp",
	});
}

export default Component;

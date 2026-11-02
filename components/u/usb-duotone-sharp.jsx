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
		"content": `<style>.a6ewi35uy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3.236 10.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338M20 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1ZM9.236 17.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338");
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
</style><g class="ft5dv1b6b"><path class="a6ewi35uy"/><path class="zoyn-ou5o"/></g>`,
		"fallback": "coolicons:usb-duotone-sharp",
	});
}

export default Component;

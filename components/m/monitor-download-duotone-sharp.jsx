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
		"content": `<style>.dpjn0abqy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v13H4Zm5 16h6m-6-9l3 3l3-3m-3 3V7");
}

.ft5dv1b6b {
  fill: none;
}

.wb_0sk4yy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v13H4Z");
}
</style><g class="ft5dv1b6b"><path class="wb_0sk4yy"/><path class="dpjn0abqy"/></g>`,
		"fallback": "coolicons:monitor-download-duotone-sharp",
	});
}

export default Component;

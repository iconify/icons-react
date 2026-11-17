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
		"content": `<style>.ddlcevtmi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 21a5 5 0 1 1 .001-10.001A5 5 0 0 1 8 21");
}

.en-mfniip {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0m9-4l9-9m-6 0h6v6");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="ddlcevtmi"/><path class="en-mfniip"/></g>`,
		"fallback": "coolicons:mars-duotone-sharp",
	});
}

export default Component;

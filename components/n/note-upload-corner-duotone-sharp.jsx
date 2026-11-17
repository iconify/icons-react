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
		"content": `<style>.chfyw2b4v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v4H8v12H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.j5s6e2_gi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H4V4h16v4m0 8l-3-3l-3 3m3-3v8");
}
</style><g class="ft5dv1b6b"><path class="chfyw2b4v"/><path class="j5s6e2_gi"/></g>`,
		"fallback": "coolicons:note-upload-corner-duotone-sharp",
	});
}

export default Component;

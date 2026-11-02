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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i6p-avb7b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h12v12H3Zm12 4l6-3v10l-6-3");
}

.zktdzhfnq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 6h12v12H3Z");
}
</style><g class="ft5dv1b6b"><path class="zktdzhfnq"/><path class="i6p-avb7b"/></g>`,
		"fallback": "coolicons:video-duotone-sharp",
	});
}

export default Component;
